import { MobileDeviceOS } from '@utils/types/mobileOs'
import { ActionRedux } from '@utils/types/redux'
import actionTypes, { DeviceConstantsTypes } from './device.constant'
import { DeviceStateType } from './device.reducer'

export function setMobileDeviceOS(
  os: MobileDeviceOS
): ActionRedux<DeviceConstantsTypes, DeviceStateType> {
  return {
    type: actionTypes.SET_MOBILE_DEVICE_OS,
    payload: {
      mobile_os: os,
    },
  }
}
