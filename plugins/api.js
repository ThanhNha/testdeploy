import Form from '@/api/form'
import Post from '@/api/post'
import Product from '@/api/product'
import Banner from '@/api/banner'
import FAQ from '@/api/faq'
import Room from '@/api/room'

const ErrorType = {
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  Unprocessable: 422,
}

export default (ctx, inject) => {
  const repository = function (ctx) {
    const { app, $axios, redirect, store } = ctx

    const api = $axios.create({
      headers: {
        common: {
          Accept: 'application/json',
        },
      },
    })

    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJSXHUxZWExbmcgXHUwMTEwXHUwMGY0bmcgU3RvcmUiLCJzdWIiOjAsImlhdCI6MTY0MDUyMzM2OCwiZGF0YSI6eyJpZCI6MCwiZW1haWwiOiJndWVzdEBqYW1zdGFja3ZpZXRuYW0uY29tIn19.vAG5UfZG8r1QfKKjJp8HetJ-32hGlqf8Krr29LiGrUk'
    api.onRequest((config) => {
      if (process.env.NODE_ENV !== 'production') {
        console.log(config.url)
      }
      if (!app.$auth || !app.$auth.loggedIn) {
        api.setToken(token, 'Bearer')
      } else {
        api.setToken(app.$auth.strategy.token.get())
      }
    })

    api.onError((error) => {
      const {
        response: {
          data: { message },
        },
      } = error

      if (process.env.NODE_ENV !== 'production') {
        console.log('-------onError--------')
        console.log(message)
      }

      if (!error.response) {
        return
      }

      const code = error.response.status

      if (code === ErrorType.Unprocessable) {
        return redirect('/')
      }

      if (code === ErrorType.Unauthorized) {
        return redirect('/')
      }

      if (code === ErrorType.Forbidden) {
        return
      }

      if (code === ErrorType.NotFound) {
        return
      }
    })

    return {
      form: Form(api),
      post: Post(api),
      product: Product(api),
      banner: Banner(api),
      faq: FAQ(api),
      room: Room(api),
    }
  }

  inject('api', repository(ctx))
}
