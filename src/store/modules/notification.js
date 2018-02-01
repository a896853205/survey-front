// 通知变量储存
export default {
  state: {
    notify: {
      title: '',
      content: ''
    },
    delay: 3000
  },
  mutations: {
    /**
     * 开始提示
     * @param {Object} state 状态
     * @param {String} title 标题
     * @param {String} content 内容
     */
    alert (state, {title, content}) {
      state.notify.title = title
      state.notify.content = content
      setTimeout(() => {
        state.notify.title = ''
        state.notify.content = ''
      }, state.delay)
    }
  },
  actions: {}
}
