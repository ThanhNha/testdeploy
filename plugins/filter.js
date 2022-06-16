import Vue from 'vue'

Vue.filter('formatPrice', (price) => {
  const formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  })

  return formatter.format(price)
})
