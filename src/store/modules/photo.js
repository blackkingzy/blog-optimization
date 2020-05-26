export default {
  namespaced: true,
  state: {
    photoList: [],
    activePhoto: ''
  },
  getters: {
    getPhotoList: (state, getters, rootState) => {
      return state.photoList
    }
  },
  mutations: {
    setPhotoList: (state, data) => {
      state.photoList = data
    },
    setActivePhoto: (state, index) => {
      state.activePhoto = index
    }
  },
  actions: {}
}
//对于模块内部需要访问外部的某属性时，这时候在模块内会暴露rootState
