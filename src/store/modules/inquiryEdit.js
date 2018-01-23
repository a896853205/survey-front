// 编辑问卷变量储存
export default {
  state: {
    questionData: [{
      name: '问题1?',
      opationData: [{
        name: '选项1',
        value: '选项1',
        isActive: false
      }, {
        name: '选项2',
        value: '选项2',
        isActive: false
      }],
      isEdit: false
    }, {
      name: '问题2?',
      opationData: [{
        name: '选项1',
        value: '选项1',
        isActive: false
      }, {
        name: '选项2',
        value: '选项2',
        isActive: false
      }],
      isEdit: false
    }]
  },
  mutations: {
    /**
     * 基本状态设置
     * @param {Object} state 状态
     * @param {Array} questionData 问题的数组
     */
    setQuestionData (state, questionData) {
      state.questionData = questionData
    },
    /**
    * 开启编辑问题
    * @param {Object} state 状态
    * @param {number} questionIndex 开始编辑的题目系数
    */
    editQuestion (state, questionIndex) {
      state.questionData[questionIndex].isEdit = true
    },
    /**
     * 删除的当前问题
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷的系数
     */
    deleteQuestion (state, questionIndex) {
      state.questionData.splice(questionIndex, 1)
    },
    /**
     * 题目上移
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷的系数
     */
    questionUp (state, questionIndex) {
      // 与上题交换
      let temp = state.questionData[questionIndex]
      state.questionData.splice(questionIndex, 1, state.questionData[questionIndex - 1])
      state.questionData.splice([questionIndex - 1], 1, temp)
    },
    /**
    * 题目下移
    * @param {Object} state 状态
    * @param {number} questionIndex 问卷系数
    */
    questionDown (state, questionIndex) {
      // 与下题交换
      let temp = state.questionData[questionIndex]
      state.questionData.splice(questionIndex, 1, state.questionData[questionIndex + 1])
      state.questionData.splice(questionIndex + 1, 1, temp)
    },
    /**
     * 增加当前问题的选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     */
    addOpation (state, questionIndex) {
      state.questionData[questionIndex].opationData.push({
        name: '新建选项',
        value: '新建选项',
        isActive: false
      })
    },
    /**
     * 删除选中选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    deleteOpation (state, questionIndex, opationIndex) {
      state.questionData[questionIndex].opationData.splice(opationIndex, 1)
    },
    /**
     * 删除选中选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    refreshOpation (state, questionIndex, opationIndex) {
      state.questionData[questionIndex].opationData.splice(opationIndex, 1, '')
    },
    /**
     * 保存问题
     * @param {Object} state 状态
     * @param {number} questionIndex 点击保存所在的问题系数
     */
    closeEdit (state, questionIndex) {
      state.questionData[questionIndex].isEdit = false
    }
  },
  actions: {}
}
