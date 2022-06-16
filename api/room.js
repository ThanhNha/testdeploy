export default (axios) => ({
  suggestions({ ...params }) {
    return axios
      .post('/v1/rooms/suggestions', {
        data: {
          ...params,
        },
      })
      .then((res) => res.data)
  },

  show(slug) {
    return axios.get(`/v1/rooms/${slug}`).then((res) => res.data)
  },
})
