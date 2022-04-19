module.exports = {
  root: true,
  globals: { _: true },
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  rules: { 'vue/multi-word-component-names': 0 },
}
