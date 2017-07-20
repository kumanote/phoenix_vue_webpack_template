import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  plugins: [createLogger()]
})
