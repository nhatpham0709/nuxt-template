export default ({ store }, inject) => {
  inject('loading', {
    open() {
      store.dispatch('app/setLoadingStatus', true)
    },
    close() {
      store.dispatch('app/setLoadingStatus', false)
    },
  })
}
