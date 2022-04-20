import webpack from 'webpack'

export default {
  head: {
    title: 'nuxt-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
      },
    ],
  },

  css: [],
  styleResources: {
    scss: ['@/assets/style/scss/variables/*.scss'],
  },

  plugins: [
    // '@/plugins/loading',
    '@/plugins/vee-validate',
    '@/plugins/vue-tailwind',
    '@/plugins/api.js',
  ],

  components: true,

  env: {
    apiUrl: process.env.API_URL,
  },
  
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    '@nuxtjs/style-resources',
  ],

  modules: [
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next',
  ],
  axios: {
    proxy: true,
    baseURL: process.env.API_URL,
    credentials: true,
  },
  proxy: {
    '/laravel': {
      target: 'https://laravel-auth.nuxtjs.app',
      pathRewrite: { '^/laravel': '/' },
    },
  },
  auth: {
    resetOnError: true,
    cookie: {
      prefix: 'user_auth',
      options: {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },  
    strategies: {
      laravelSanctum: {
        url: `${process.env.API_URL}/auth`,
        endpoints: {
          user: {
            url: '/profile',
            method: 'get',
          },
        },
      },
    },
  },
  moment: {
    locales: ['vi'],
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
      alwaysRedirect: true,
      redirectOn: 'root',
    },
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'vi', name: 'Tiếng Việt', iso: 'vi-VN', file: 'vi.json' },
    ],
    defaultLocale: 'vi',
    vueI18n: {
      fallbackLocale: 'vi',
    },
    langDir: '~/lang/',
  },

  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      }),
    ],
    transpile: ['vee-validate/dist/rules'],
  },
}
