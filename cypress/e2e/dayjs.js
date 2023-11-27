const dayjs = require('dayjs')

const date = dayjs('2012-10-11')
const date2 = dayjs()

const [year, month, day] = date.add(4, 'day').add(10, 'year').format('YYYY-MMM-DD').split('-')
console.log(`Current date is ${date.add(4, 'day').add(10, 'year').format('YYYY-MMMM/DD HH:MMa')}`)
console.log(year)
