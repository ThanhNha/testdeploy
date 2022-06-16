export default (axios) => ({
  contact(form) {
    return axios.post('/v1/contacts', form).then((res) => res.data)
  },
})
