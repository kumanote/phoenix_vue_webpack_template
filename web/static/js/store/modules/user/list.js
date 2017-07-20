import api from '@/api/user'

const state = {
  userList: []
}

const getters = {
  userList: state => state.userList
}

const actions = {
  getUserList ({ commit, state }) {
    api.getUserList(apiResponseData => {
      const userList = apiResponseData.data
      commit('receiveUserList', userList)
    })
  }
}

const mutations = {
  receiveUserList (state, userList) {
    state.userList = []
    for (let i = 0; i < userList.length; i++) {
      state.userList.push(userList[i])
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
