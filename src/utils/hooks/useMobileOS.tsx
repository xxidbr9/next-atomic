import { MobileDeviceOS } from '@utils/types/mobileOs'
import { useEffect, useState } from 'react'

const useMobileOS = (): MobileDeviceOS => {
  const [OS, setOS] = useState<MobileDeviceOS>('unknown')
  useEffect(() => {
    let userAgent = navigator.userAgent || navigator.vendor
    if (/android/i.test(userAgent)) {
      setOS('Android')
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setOS('iOS')
    } else {
      setOS('unknown')
    }
  }, [])
  return OS
}
export default useMobileOS
