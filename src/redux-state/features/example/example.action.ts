import { ActionRedux } from "@utils/types/redux"
import actionTypes, { ExampleConstantsTypes } from "./example.constant"
import { ExampleStateType } from "./example.reducer"

export function failure(error): ActionRedux<ExampleConstantsTypes, ExampleStateType> {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function increment(): ActionRedux<ExampleConstantsTypes, ExampleStateType> {
  return { type: actionTypes.INCREMENT }
}

export function decrement(): ActionRedux<ExampleConstantsTypes, ExampleStateType> {
  return { type: actionTypes.DECREMENT }
}

export function reset(): ActionRedux<ExampleConstantsTypes, ExampleStateType> {
  return { type: actionTypes.RESET }
}

export function loadData(): ActionRedux<ExampleConstantsTypes, ExampleStateType> {
  return { type: actionTypes.LOAD_DATA }
}

export function loadDataSuccess(data): ActionRedux<ExampleConstantsTypes, ExampleStateType> {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    payload: data,
  }
}

export function startClock(): ActionRedux<ExampleConstantsTypes, ExampleStateType> {
  return { type: actionTypes.START_CLOCK }
}

export function tickClock(isServer: boolean): ActionRedux<ExampleConstantsTypes, ExampleStateType> {
  return {
    type: actionTypes.TICK_CLOCK,
    payload: {
      light: !isServer
    }
  }
}
