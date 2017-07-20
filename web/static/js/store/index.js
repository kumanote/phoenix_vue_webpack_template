import Vuex from 'vuex'
import Vue from 'vue'
import userList from './modules/user/list'
import userAdd from './modules/user/add'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userList: userList,
    userAdd: userAdd
  },
  plugins: [createLogger()]
})
