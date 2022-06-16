export function formatDate(date) {
  let month = new Date(date).toLocaleString('en-GB', { month: '2-digit' })
  let day = new Date(date).toLocaleString('en-GB', { day: '2-digit' })
  let year = new Date(date).getFullYear()

  return day + '/' + month + '/' + year
}

export function formatMonth(date) {
  let month = new Date(date).toLocaleString('en-GB', { month: '2-digit' })
  return 'Tháng ' + month
}

export function formatDay(date) {
  let day = new Date(date).toLocaleString('en-GB', { day: '2-digit' })
  return day
}
