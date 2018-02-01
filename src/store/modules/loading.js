// 增加问题过程变量储存
export default {
  state: {
    isLoad: false
  },
  mutations: {
    /**
     * 开始加载
     * @param {Object} state 状态
     */
    startLoad (state) {
      state.isLoad = true
    },
    /**
     * 停止加载
     * @param {Object} state 状态
     */
    stopLoad (state) {
      state.isLoad = false
    }
  },
  actions: {}
}
