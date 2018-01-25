// 编辑问卷变量储存
export default {
  state: {
    inquiryData: {
      name: '测试问卷题目',
      describe: '问卷描述',
      questionData: [{
        name: '问题1?',
        opationData: [{
          name: '选项1',
          value: '选项1',
          isActive: false,
          score: 1
        }, {
          name: '选项2',
          value: '选项2',
          isActive: false,
          score: 2
        }],
        isEdit: false,
        maxScore: 2
      }, {
        name: '问题2?',
        opationData: [{
          name: '选项1',
          value: '选项1',
          isActive: false,
          score: 3
        }, {
          name: '选项2',
          value: '选项2',
          isActive: false,
          score: 4
        }],
        isEdit: false,
        maxScore: 4
      }],
      maxScore: 7
    }
  },
  mutations: {
    /**
     * 点击选项事件
     * @param {Object} state 状态
     * @param {number} questionIndex 选中选项的题目系数
     * @param {number} opationIndex 选中的选项系数
     */
    activeOpation (state, {questionIndex, opationIndex}) {
      state.inquiryData.questionData[questionIndex].opationData.forEach(value => {
        value.isActive = false
      })
      state.inquiryData.questionData[questionIndex].opationData[opationIndex].isActive = true
    },
    /**
     * 基本状态设置
     * @param {Object} state 状态
     * @param {Array} questionData 问题的数组
     */
    setQuestionData (state, questionData) {
      state.inquiryData.questionData = questionData
    },
    /**
    * 开启编辑问题
    * @param {Object} state 状态
    * @param {number} questionIndex 开始编辑的题目系数
    */
    editQuestion (state, questionIndex) {
      state.inquiryData.questionData[questionIndex].isEdit = true
    },
    /**
     * 删除的当前问题
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷的系数
     */
    deleteQuestion (state, questionIndex) {
      state.inquiryData.questionData.splice(questionIndex, 1)
    },
    /**
     * 题目上移
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷的系数
     */
    questionUp (state, questionIndex) {
      // 与上题交换
      let temp = state.inquiryData.questionData[questionIndex]
      state.inquiryData.questionData.splice(questionIndex, 1, state.inquiryData.questionData[questionIndex - 1])
      state.inquiryData.questionData.splice([questionIndex - 1], 1, temp)
    },
    /**
    * 题目下移
    * @param {Object} state 状态
    * @param {number} questionIndex 问卷系数
    */
    questionDown (state, questionIndex) {
      // 与下题交换
      let temp = state.inquiryData.questionData[questionIndex]
      state.inquiryData.questionData.splice(questionIndex, 1, state.inquiryData.questionData[questionIndex + 1])
      state.inquiryData.questionData.splice(questionIndex + 1, 1, temp)
    },
    /**
     * 增加当前问题的选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     */
    addOpation (state, questionIndex) {
      state.inquiryData.questionData[questionIndex].opationData.push({
        name: '新建选项',
        value: '新建选项',
        isActive: false,
        score: 0
      })
    },
    /**
     * 删除选中选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    deleteOpation (state, {questionIndex, opationIndex}) {
      state.inquiryData.questionData[questionIndex].opationData.splice(opationIndex, 1)
    },
    /**
     * 清空选中选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    refreshOpation (state, {questionIndex, opationIndex}) {
      state.inquiryData.questionData[questionIndex].opationData.splice(opationIndex, 1, '')
    },
    /**
     * 保存问题
     * @param {Object} state 状态
     * @param {number} questionIndex 点击保存所在的问题系数
     */
    closeEdit (state, questionIndex) {
      state.inquiryData.questionData[questionIndex].isEdit = false
    },
    /**
     * 在index后增加问题
     * @param {Object} state 状态
     * @param {number} questionIndex 问题系数
     */
    addQuestion (state, questionIndex) {
      state.inquiryData.questionData.splice(questionIndex + 1, 0, {
        name: '新建问题',
        opationData: [{
          name: '新建选项',
          value: '新建选项',
          isActive: false,
          score: 0
        }, {
          name: '新建选项',
          value: '新建选项',
          isActive: false,
          score: 0
        }],
        isEdit: false,
        maxScore: 0
      })
    },
    /**
     * opation 修改分数
     * @param {Object} state 状态
     * @param {number} questionIndex 问题的系数
     * @param {number} opationIndex 选项的系数
     * @param {String} value 修改完的分数
     */
    changeScore (state, {questionIndex, opationIndex, value}) {
      // 在这里设置opation分数,而且刷新其他增加分数方法.
      // 设置opation分数
      let parsedScore = parseInt(value)
      if (isNaN(parsedScore)) {
        parsedScore = 0
      }
      state.inquiryData.questionData[questionIndex].opationData[opationIndex].score = parsedScore
      // 调用修改题目修改分数
      this.commit('changeQuestionScore', questionIndex)
    },
    /**
     * 刷新问题分数
     * @param {Object} state 状态
     */
    changeQuestionScore (state, questionIndex) {
      let maxScore = 0
      state.inquiryData.questionData[questionIndex].opationData.forEach(item => {
        if (item.score > maxScore) {
          maxScore = item.score
        }
      })
      state.inquiryData.questionData[questionIndex].maxScore = maxScore
      // 调用修改问卷修改分数
      this.commit('changeInquiryScore')
    },
    /**
     * 刷新问卷分数
     * @param {Object} state 状态
     */
    changeInquiryScore (state) {
      let totalScore = 0
      state.inquiryData.questionData.forEach(item => {
        totalScore = totalScore + parseInt(item.maxScore)
      })
      state.inquiryData.maxScore = totalScore
    }
  },
  actions: {}
}
