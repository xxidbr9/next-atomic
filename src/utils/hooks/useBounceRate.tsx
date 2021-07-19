import { useEffectOnce } from 'react-use'
import ReactGA from 'react-ga'
import { bounceTime } from '@utils/configs/analytics.config'

/* 
? TODO
[ ] Make sure it hit custom event
*/

const useBounceRate = (event, data) => {
  useEffectOnce(() => {
    setTimeout(() => {
      const ga = ReactGA.ga()
      ga('send', 'event', {
        eventCategory: event,
        eventLabel: 'test',
      })
    }, bounceTime)
  })
}

export default useBounceRate
