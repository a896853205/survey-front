// 用户变量储存
export default {
  state: {
    account: '',
    role_id: 0,
    name: '',
    urlBase: ''
  },
  mutations: {
    getUser (state, user) {
      state.account = user.account
      state.role_id = user.role_id
      state.name = user.name
      state.urlBase = user.baseUrl
    }
  },
  actions: {}
}
