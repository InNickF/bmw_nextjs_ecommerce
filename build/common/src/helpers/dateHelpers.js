import moment from 'moment'
import 'moment/locale/es'
import capitalize from './uppercaseFirstLetter'

moment.locale('es')

export function getDate (date) {
  return moment(new Date(date).toISOString()).format('YYYY-MM-DD')
}

export function getMonths () {
  return moment.months()
}

export function getLastDayOfMonth (month, year) {
  const currentDate = moment(new Date(`${month}/01/${year}`).toISOString())
  return currentDate
    .add(1, 'months')
    .date(1)
    .format('YYYY-MM-DD')
}

export function getShortDate (date) {
  const currentDate = moment(date)
  return currentDate.format('MMM DD, YYYY')
}

export function getDayOfWeek (date) {
  const currentDate = moment(date)
  return currentDate.format('dddd')
}

export function getDayOfMonth (date) {
  const currentDate = moment(date)
  return currentDate.format('D')
}

export function getAMPMHour (date) {
  const currentDate = moment(date)
  return currentDate.format('h:mm a')
}

export function getFormatedDate (date) {
  const currentDate = moment(date)
  return capitalize(currentDate.format('MMMM D YYYY, h:mm a').toString())
}

export { moment }
