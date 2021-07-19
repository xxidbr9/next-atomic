import { MobileDeviceOS } from '@utils/types/mobileOs'

const generateGlowstorLink = (os: MobileDeviceOS) => {
  switch (os) {
    case 'Android':
      return process.env.NEXT_PUBLIC_GLOWSTORE_LINK_ANDROID_PLAYSTORE
    case 'iOS':
      return process.env.NEXT_PUBLIC_GLOWSTORE_LINK_IOS_APPSTORE
    default:
      return process.env.NEXT_PUBLIC_GLOWSTORE_LINK_ANDROID_PLAYSTORE
  }
}

export default generateGlowstorLink
