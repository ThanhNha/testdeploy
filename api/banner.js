export default (axios) => ({
  list() {
    return axios.get('/v1/banners?position=ralli_homepage').then((res) => res.data)
  },
})
