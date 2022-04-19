/* eslint-disable import/namespace */
import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
  setInteractionMode,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import vi from '@/lang/validations/vi.json'

setInteractionMode('lazy')
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

extend('url', (value) => {
  return /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(
    value
  )
})

extend('max_item', (value, args) => {
  return value.length <= parseInt(args[0])
})

extend('password', (value) => {
  return /^(?=.*[A-Z]).{6,12}$/.test(value)
})

extend('confirm_password', (value, args) => {
  return value === args[0]
})

extend('not_accept_whitespace_start_end', (value) => {
  return /^[^\s]+(\s+[^\s]+)*$/.test(value)
})

extend('unique', (value, [isUnique]) => {
  let valid
  if (isUnique === 'true') valid = true
  if (isUnique === 'false') valid = false
  return valid
})

localize('vi', vi)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
