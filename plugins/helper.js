export default ({ app }, inject) => {
  const getWindowSize = () => {
    let data = {
      width: 0,
      height: 0,
    }
    data.width = window.innerWidth
    data.height = window.innerHeight
    return data
  }
  inject('getWindowSize', getWindowSize)
}
