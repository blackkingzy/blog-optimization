import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import photo from './modules/photo'
import article from './modules/article'
import { Plugin } from './plugin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  // getters我认为完全可以用组件自己内的计算属性代替
  getters: {},
  mutations,
  actions,
  modules: {
    photo,
    article
  },
  plugins: [Plugin]
})
