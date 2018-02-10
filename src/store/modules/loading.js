// 增加问题过程变量储存
export default {
  state: {
    isLoad: false,
    isLoadNum: 0
  },
  mutations: {
    /**
     * 开始加载
     * @param {Object} state 状态
     */
    startLoad (state) {
      state.isLoadNum++
      if (state.isLoadNum > 0) {
        state.isLoad = true
      }
    },
    /**
     * 停止加载
     * @param {Object} state 状态
     */
    stopLoad (state) {
      state.isLoadNum--
      if (state.isLoadNum <= 0) {
        state.isLoad = false
      }
    }
  },
  actions: {}
}
