import { MobileDeviceOS } from '@utils/types/mobileOs'

const getMobileOS = (): MobileDeviceOS => {
  var userAgent = navigator.userAgent || navigator.vendor

  if (/android/i.test(userAgent)) {
    return 'Android'
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS'
  }

  return 'unknown'
}

export default getMobileOS
