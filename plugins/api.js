export default function (
  { $auth, $axios, app, store, redirect, error, $config },
  inject
) {
  const axios = $axios.create({
    headers: {
      common: {
        ContentType: 'application/json',
        Accept: 'application/json',
      },
    },
  })
  axios.defaults.baseURL = process.env.apiUrl
  const lang = app.$cookiz.get('lang')

  if (lang) {
    $axios.setHeader('Accept-Language', lang)
  }

  axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    if ([401].includes(code)) {
      $auth.logout().then(() => redirect('/login'))
      return
    }
    if ([500, 503].includes(code)) {
      error({
        statusCode: code,
        message: err.response.data.meta.message,
      })
    }
  })

  const api = {
    register: (payload) => axios.$post(`auth/register`, payload),
    testApi: () => axios.$get('auth/profile'),
  }
  inject('api', api)
}
