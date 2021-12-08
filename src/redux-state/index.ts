import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createWrapper, Context, MakeStore } from 'next-redux-wrapper'
import reducer from './reducer'
import { IStateType } from './state'
import { globalPersistConfig } from './persist'

/* 
===== TODO =====
[ ] Add Redux Saga Feature
[X] Add Redux Persist Logic
=== END TODO ===
*/

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

/**
 * Middle ware for development only
 *  */
const isDev = process.env.NODE_ENV !== 'production'

const devMiddleware = () => {
  return isDev ? [] : []
}

const makeConfiguredStore = reducer =>
  createStore(reducer, bindMiddleware([thunk, ...devMiddleware()]))

const makeConfiguredClientStore = (reducer, config) => {
  const { persistReducer, persistStore } = require('redux-persist')

  const persistedReducer = persistReducer(config, reducer)

  const store = makeConfiguredStore(persistedReducer)

  // const newStore = Object.assign(store,{__persistor:persistStore(store)})

  return store
}

export const makeStore: MakeStore<Store<IStateType, AnyAction>> = (
  context: Context
) => {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    return makeConfiguredStore(reducer)
  } else {
    return makeConfiguredClientStore(reducer, globalPersistConfig)
  }
}

export const wrapper = createWrapper<Store<IStateType>>(makeStore, {
  debug: isDev,
})
