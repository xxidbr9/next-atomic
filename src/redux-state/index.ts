import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'
import { createWrapper, Context, MakeStore } from "next-redux-wrapper";
import reducer from "./reducer";
import { IStateType } from "./state";

/* 
===== TODO =====
[ ] Add Redux Saga Feature
[ ] Add Redux Persist Logic
=== END TODO ===
*/

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}


/**
 * Middle ware for development only
 *  */ 
const isDev = process.env.NODE_ENV !== "production"
const devMiddleware = () => {
  return isDev ? [logger] : [];
}

export const makeStore: MakeStore<Store<IStateType, AnyAction>> = (context: Context) => createStore(reducer, bindMiddleware([thunk, ...devMiddleware()]));

export const wrapper = createWrapper<Store<IStateType>>(makeStore, { debug: isDev });
