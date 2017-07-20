import api from '@/api/user'

const state = {
  form: {
    name: '',
    age: 0
  }
}

const getters = {
  form: state => state.form
}

const actions = {
  reset ({ commit, state }) {
    commit('reset')
  },
  addUser ({ commit, state }, onSuccess, onFailure) {
    const name = state.form.name.trim()
    const age = state.form.age
    if (name.length < 1) {
      onFailure('user name is empty...')
      return
    }
    api.addUser(name, age, apiResponseData => {
      commit('reset')
      onSuccess('saved!!')
    })
  }
}

const mutations = {
  reset (state) {
    state.form.name = ''
    state.form.age = 0
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
