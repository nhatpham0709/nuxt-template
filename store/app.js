export const state = () => ({
  loading: false,
})

export const getters = {
  loading: (state) => state.loading,
}

export const mutations = {
  SET_LOADING_STATUS(state, payload) {
    state.loading = payload
  },
}

export const actions = {
  setLoadingStatus({ commit }, status) {
    commit('SET_LOADING_STATUS', status)
  },
}
