import moment from 'moment'
import { tz } from 'moment-timezone'

export const setToNormalDate = (date, isLoading) => {
  const printDate = moment.utc(date).format('DD/MM/YYYY')
  return !isLoading && printDate ? printDate : ''
}

export const setToLocalTime = date => {
  return tz(date, 'Asia/Jakarta').format('HH:mm')
}

export const changeToLocalDate = date => {
  return moment(date).format('DD MMMM YYYY')
}

export default null
