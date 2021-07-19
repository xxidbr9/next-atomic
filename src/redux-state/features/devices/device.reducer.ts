import { MobileDeviceOS } from '@utils/types/mobileOs'
import { ActionRedux } from '@utils/types/redux'
import { HYDRATE } from 'next-redux-wrapper'
import actionTypes, { DeviceConstantsTypes } from './device.constant'

export type DeviceStateType = {
  mobile_os?: MobileDeviceOS
}

const initialState: DeviceStateType = {
  mobile_os: 'unknown',
}

export default function reducer(
  state: DeviceStateType = initialState,
  action: ActionRedux<DeviceConstantsTypes & typeof HYDRATE, DeviceStateType>
): DeviceStateType {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }
    case actionTypes.SET_MOBILE_DEVICE_OS:
      return { ...state, mobile_os: action.payload.mobile_os }
    default:
      return state
  }
}
