export default (axios) => ({
  list() {
    return axios.get(`/v1/questions`).then((res) => res.data)
  },
  show(slug) {
    return axios.get(`/v1/questions/${slug}`).then((res) => res.data)
  },
})
