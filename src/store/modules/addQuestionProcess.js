// 增加问题过程变量储存
export default {
  state: {
    processStatus: 0,
    processData: ['选择类别', '添加基本信息', '添加题目', '确认发布'],
    processClass: ['icon-viewgallery', 'icon-signboard', 'icon-rfq', 'icon-scanning', 'icon-templatedefault']
  },
  mutations: {
    /**
     * 过程进入下一步骤
     */
    nextProcess (state) {
      state.processStatus = state.processStatus + 1
    },
    /**
     * 进入具体步骤
     */
    goProcess (state, gears) {
      state.processStatus = gears
    },
    /**
     * 进程初始化
     * @param {Object} state 上面的state
     */
    initProcess (state) {
      state.processStatus = 0
    }
  },
  actions: {}
}
