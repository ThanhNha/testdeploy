export default (axios) => ({
  list(params = {}) {
    return axios.get('/v1/products', { params }).then((res) => res.data.data)
  },

  comboFilter({ category_id = 1, ...restParams } = {}) {
    return axios
      .get(`/v1/products/combo_ralli_smart`, {
        params: {
          category_id,
          ...restParams,
        },
      })
      .then((res) => res.data)
  },

  show(slug, variant_id) {
    const variant = variant_id ? '?id=' + variant_id : ''
    return axios.get(`v1/products/${slug}${variant}`).then((res) => res.data)
  },

  interested() {
    return axios.get('/v1/products/interested').then((res) => res.data)
  },

  search(params = {}) {
    return axios.get('/v1/products/search', params).then((res) => res.data)
  },

  variantFilter(id) {
    return axios.get(`/v1/options?category_id=${id}`).then((res) => res.data)
  },

  listCategory(groupId) {
    return axios.get(`/v1/product-categories?group=${groupId}`).then((res) => res.data.data.data)
  },

  category(slug) {
    return axios.get(`/v1/product-categories/${slug}`).then((res) => res.data.data)
  },

  productsCategory(id) {
    return axios.get(`/v1/products?category_id=${id}`).then((res) => res.data)
  },

  productsCategoryHome(group, isShowChildren = 0, is_show_product = 1) {
    return axios
      .get(
        `/v1/product-categories?group=${group}&is_home=1&is_show_product=${is_show_product}&is_show_children=${isShowChildren}`
      )
      .then((res) => res.data)
  },

  search(keyword) {
    return axios.get(`/v1/products/search?keyword=${keyword}`).then((res) => res.data)
  },

  payments() {
    return axios.get(`/v1/payments`).then((res) => res.data)
  },

  multiple(ids) {
    return axios.get(`/v1/products/get-multiple?ids=${ids}`).then((res) => res.data)
  },

  options() {
    return axios.get(`/v1/products/options`).then((res) => res.data)
  },

  topView() {
    return axios.get(`/v1/combos/top-view-products`).then((res) => res.data)
  },

  flashSales(groupId = 1) {
    return axios.get(`/v1/product-flash-sales?group=${groupId}`).then((res) => res.data.data)
  },

  listCombo(id) {
    return axios.get(`/v1/products/combo?product_id=${id}`).then((res) => res.data.data)
  },

  addCombo({ ...params }) {
    return axios.post(`/v1/cart/combo`, params).then((res) => res.data)
  },
})
