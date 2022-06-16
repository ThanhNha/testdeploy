export default (axios) => ({
  list(params = {}) {
    return axios
      .get('/v1/posts', {
        params: {
          ...params,
          domain: 'rallismart',
        },
      })
      .then((res) => res.data)
  },
  vlog(params = {}) {
    return axios
      .get('/v1/posts', {
        params: {
          ...params,
          domain: 'rallismart',
          type: 'vlog'
        },
      })
      .then((res) => res.data)
  },
  listTag(nested) {
    return axios
      .get(`/v1/posts/tags/${nested}`)
      .then((res) => res.data)
  },

  show(slug) {
    return axios.get(`/v1/posts/${slug}`).then((res) => res.data)
  },
})
