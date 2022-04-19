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
  const token = app.$cookiz.get("authToken");
  const lang = app.$cookiz.get("lang");

  if (token) {
      $axios.setHeader("Authorization", `Bearer ${token}`);
  }

  if (lang) {
      $axios.setHeader("Accept-Language", lang);
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
    forgotPassword: (payload) => axios.$post(`auth/password/forgot`, payload),
    checkResetPasswordToken: (payload) =>
      axios.$post(`auth/password/token/verify`, payload),
    newPassword: (payload) => axios.$post(`auth/password/reset`, payload),
    loginWithSocial: (payload, socialName) =>
      axios.$post(`auth/social/${socialName}`, payload),
    confirmEmail: (payload) => axios.$put(`auth/confirm-email`, payload),
    resendEmail: (payload) => axios.$post(`auth/resend-email-confirm`, payload),
  }
  inject('api', api)
}
