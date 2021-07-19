import actionTypes, { ExampleConstantsTypes } from './example.constant'
import { HYDRATE } from 'next-redux-wrapper'
import { ActionRedux } from '@utils/types/redux'


export type ExampleStateType = {
  count?: number,
  error?: boolean,
  lastUpdate?: number,
  light?: boolean,
  placeholderData?: any,
}

const initialState: ExampleStateType = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
}


function reducer(state: ExampleStateType = initialState, action: ActionRedux<ExampleConstantsTypes & typeof HYDRATE, ExampleStateType>) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      }

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      }

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      }

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: initialState.count },
      }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.payload.placeholderData },
      }

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.payload.lastUpdate, light: !!action.payload.light },
      }

    default:
      return state
  }
}

export default reducer