let axios = require('axios')
// 编辑问卷变量储存
export default {
  state: {
    inquiryData: {},
    inquiryEpilog: []
  },
  mutations: {
    /**
     * 问题题目修改
     * @param {Object} state 状态
     * @param {number} questionIndex 选中选项的题目系数
     * @param {String} value 修改后的题目
     */
    setQuestionTitle (state, {questionIndex, value}) {
      state.inquiryData.questionData[questionIndex].setTitle(value)
    },
    /**
     * 选项题目修改
     * @param {Object} state 状态
     * @param {number} questionIndex 选项的题目系数
     * @param {number} opationIndex 选项的系数
     * @param {String} value 修改后的题目
     */
    setOpationTitle (state, {questionIndex, opationIndex, value}) {
      state.inquiryData.questionData[questionIndex].opationData[opationIndex].setName(value)
    },
    /**
     * 点击选项事件
     * @param {Object} state 状态
     * @param {number} questionIndex 选中选项的题目系数
     * @param {number} opationIndex 选中的选项系数
     */
    activeOpation (state, {questionIndex, opationIndex}) {
      state.inquiryData.questionData[questionIndex].activeOpation(opationIndex)
    },
    /**
    * 开启编辑问题
    * @param {Object} state 状态
    * @param {number} questionIndex 开始编辑的题目系数
    */
    editQuestion (state, questionIndex) {
      state.inquiryData.questionData[questionIndex].openEdit()
    },
    /**
     * 删除的当前问题
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷的系数
     */
    deleteQuestion (state, questionIndex) {
      state.inquiryData.deleteQuestion(questionIndex)
    },
    /**
     * 题目上移
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷的系数
     */
    questionUp (state, questionIndex) {
      // 与上题交换
      state.inquiryData.questionUp(questionIndex)
    },
    /**
    * 题目下移
    * @param {Object} state 状态
    * @param {number} questionIndex 问卷系数
    */
    questionDown (state, questionIndex) {
      // 与下题交换
      state.inquiryData.questionDown(questionIndex)
    },
    /**
     * 增加当前问题的选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     */
    addOpation (state, questionIndex) {
      let opation = new Opation('新建选项', '新建选项', false, 0)
      state.inquiryData.questionData[questionIndex].setOpation(opation)
    },
    /**
     * 删除选中选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    deleteOpation (state, {questionIndex, opationIndex}) {
      state.inquiryData.deleteOpation(questionIndex, opationIndex)
    },
    /**
     * 清空选中选项
     * @param {Object} state 状态
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    refreshOpation (state, {questionIndex, opationIndex}) {
      state.inquiryData.refreshOpation(questionIndex, opationIndex)
    },
    /**
     * 保存问题
     * @param {Object} state 状态
     * @param {number} questionIndex 点击保存所在的问题系数
     */
    closeEdit (state, questionIndex) {
      state.inquiryData.questionData[questionIndex].closeEdit()
    },
    /**
     * 在index后增加问题
     * @param {Object} state 状态
     * @param {Object} questionInfo 问题对象
     * @param {Array} opationInfo 选项数组
     */
    addQuestion (state, questionIndex) {
      let opation1 = new Opation('新建选项1', '新建选项1', false, 0)
      let opation2 = new Opation('新建选项2', '新建选项2', false, 0)
      let question = new Question('', '新建问题', false)
      question.setOpation(opation1)
      question.setOpation(opation2)
      state.inquiryData.setQuestion(question, questionIndex + 1)
    },
    /**
     * opation 修改分数
     * @param {Object} state 状态
     * @param {number} questionIndex 问题的系数
     * @param {number} opationIndex 选项的系数
     * @param {String} value 修改完的分数
     */
    changeScore (state, {questionIndex, opationIndex, value}) {
      state.inquiryData.setOpationScore(questionIndex, opationIndex, value)
    },
    /**
     * 装载问卷
     * @param {Object} state 状态
     * @param {Array} inquiryData 问卷信息
     */
    setInquiry (state, {inquiryData, questionData, opationData}) {
      let inquiry = new Inquiry(inquiryData.id, inquiryData.title, inquiryData.description, inquiryData.create_time, inquiryData.end_time, inquiryData.switch)
      questionData.forEach(questionItem => {
        // 新建问题
        let tempQuestion = new Question(questionItem.id, questionItem.content, false)
        opationData.forEach(opationItem => {
          // 添加该问题的选项
          if (questionItem.id === opationItem.question_id) {
            tempQuestion.setOpation(new Opation(opationItem.content, opationItem.content, false, opationItem.score))
          }
        })
        inquiry.setQuestion(tempQuestion)
      })
      state.inquiryData = inquiry
    },
    /**
     * 设置结语
     * @param {Object} state 状态
     * @param {Array} epilogData 结语数组
     */
    setEpilog (state, epilogData) {
      // 如果没有结语就放在前台一个数据
      // 如果有就显示查出来的
      if (epilogData.length === 0) {
        state.inquiryEpilog = [{
          minScore: 0,
          maxScore: state.inquiryData.maxScore,
          remark: ''
        }]
      } else {
        state.inquiryEpilog = epilogData
      }
    },
    /**
     * 设置最小分值
     * @param state 状态
     * @param value 要设置的值
     * @param epilogIndex 结语的系数
     */
    setMinScore (state, {value, epilogIndex}) {
      state.inquiryEpilog[epilogIndex].minScore = parseInt(value)
    },
    /**
     * 设置最大分值
     * @param state 状态
     * @param value 要设置的值
     * @param epilogIndex 结语的系数
     */
    setMaxScore (state, {value, epilogIndex}) {
      state.inquiryEpilog[epilogIndex].maxScore = parseInt(value)
    },
    /**
     * 设置最大分值
     * @param state 状态
     * @param value 要设置的值
     * @param epilogIndex 结语的系数
     */
    setRemark (state, {value, epilogIndex}) {
      state.inquiryEpilog[epilogIndex].remark = value
    },
    /**
     * 增加一个结语
     * @param {Object} state 状态
     */
    addEpilog (state) {
      state.inquiryEpilog.push({
        minScore: 0,
        maxScore: state.inquiryData.maxScore,
        remark: ''
      })
    },
    toggleInquiry (state, openState) {
      state.inquiryData.toggle = openState
    }
  },
  actions: {
    /**
     * 获取问卷全部信息
     * @param {Object} state 状态
     * @param {String} inquiryId 问卷id
     */
    getInquiry (state, inquiryId) {
      axios.post('/home/manager/selectInquiry', {
        inquiryId
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          this.commit('setInquiry', {
            inquiryData: result.inquiryInfo,
            questionData: result.questionInfo,
            opationData: result.opationInfo})
          // 查询这个问卷是否有评语,如说有就放到vuex中,如果没有就放一个假的
          return axios.post('/home/manager/selectEpilog', {inquiryId})
        } else {
          alert('未查到问卷信息')
        }
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          this.commit('setEpilog', result.epilogInfo)
        } else {
          alert('未查到问卷信息')
        }
      })
      .catch(e => {
        console.log(e)
      })
    },
    /**
     * 通过问题系数保存问题信息
     * @param {Object} state 状态
     * @param {number} questionIndex 问题系数
     */
    saveQuestion (state, questionIndex) {
      axios.post('/home/manager/saveInquiry', {
        inquiryInfo: state.state.inquiryData
      })
      .then(res => {
        this.commit('closeEdit', questionIndex)
      })
      .catch(e => {
        console.log(e)
      })
    },
    /**
     * 看似是删除问题,其实只是刷新数据库而已
     * @param {Object} state 状态
     * @param {number} questionIndex 问题系数
     */
    deleteQuestion (state, questionIndex) {
      axios.post('/home/manager/saveInquiry', {
        inquiryInfo: state.state.inquiryData
      })
      .then(res => {
        this.commit('deleteQuestion', questionIndex)
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
/**
 * 选项构造函数
 */
class Opation {
  /**
   * 选项的构造函数
   * @param {String} name 选项名
   * @param {String} value 选项值
   * @param {boolean} isActive 是否被点击
   * @param {number} score 分数
   */
  constructor (name, value, isActive, score) {
    this.name = name
    this.value = value
    this.isActive = isActive
    this.score = score
  }
  /**
   * 设置选项名称
   * @param {String} name 设置的名
   */
  setName (name) {
    this.name = name
  }
  /**
   * 设置选项分数
   * @param {number} score 修改之后的分数
   */
  setScore (score) {
    let parsedScore = parseInt(score)
    if (isNaN(parsedScore)) {
      parsedScore = 0
    }
    this.score = parsedScore
  }
}
class Question {
  /**
   * 问题的对象
   * @param {String} questionId 问题id
   * @param {String} name 问题名
   * @param {boolean} isEdit 是否编辑
   */
  constructor (questionId, name, isEdit) {
    this.id = questionId
    this.name = name
    this.isEdit = isEdit
    // 内部属性
    this.maxScore = 0
    this.opationData = []
  }
  /**
   * 修改题目
   * @param {String} title 修改后的题目
   */
  setTitle (title) {
    this.name = title
  }
  /**
   * 装载选项对象
   * @param {Object} opation 选项对象
   * @param {number} opationIndex 选项系数
   */
  setOpation (opation, opationIndex) {
    // 将来更新opation位置使用下面的代码
    // this.opationData.splice(opationIndex, 1, opation)
    // 放入opationData
    this.opationData.push(opation)
    // 更新问题总分数
    this.refreshScore()
  }
  /**
   * 更新最大分数
   */
  refreshScore () {
    let maxScore = 0
    this.opationData.forEach(item => {
      if (item.score > maxScore) {
        maxScore = item.score
      }
    })
    this.maxScore = maxScore
  }
  /**
   * 开始编辑
   */
  openEdit () {
    this.isEdit = true
  }
  /**
   * 关闭编辑
   */
  closeEdit () {
    this.isEdit = false
  }
  /**
   * 选中一个选项
   * @param {number} opationIndex 选中选项的系数
   */
  activeOpation (opationIndex) {
    this.opationData.forEach(value => {
      value.isActive = false
    })
    this.opationData[opationIndex].isActive = true
  }
}
class Inquiry {
  /**
   * 问卷构造函数
   * @param {String} id 问卷id
   * @param {String} name 问卷名
   * @param {String} describe 问卷描述
   * @param {String} beginTime 问卷开始时间
   * @param {String} endTime 问卷结束时间
   */
  constructor (id, name, describe, beginTime, endTime, toggle) {
    this.id = id
    this.name = name
    this.describe = describe
    this.maxScore = 0
    this.beginTime = beginTime
    this.endTime = endTime
    this.toggle = toggle
    this.questionData = []
  }
  /**
   * 装载问题对象
   * @param {Object} question 问题对象
   * @param {number} questionIndex 问题系数
   */
  setQuestion (question, questionIndex) {
    // 将question放入questionData
    this.questionData.splice(questionIndex, 0, question)
    this.refreshScore()
  }
  /**
   * 删除指定问题
   * @param {number} questionIndex 删除问题的系数
   */
  deleteQuestion (questionIndex) {
    this.questionData.splice(questionIndex, 1)
    this.refreshScore()
  }
  /**
   * 更新最大分数
   */
  refreshScore () {
    let totalScore = 0
    this.questionData.forEach(item => {
      totalScore = totalScore + parseInt(item.maxScore)
    })
    this.maxScore = totalScore
  }
  /**
   * 设置选项分数
   * @param {number} questionIndex 问题系数
   * @param {number} opationIndex 选项系数
   * @param {number} score 分数
   */
  setOpationScore (questionIndex, opationIndex, score) {
    // 先调用子集的更新分数
    this.questionData[questionIndex].opationData[opationIndex].setScore(score)
    // 刷新问题总分数
    this.questionData[questionIndex].refreshScore()
    // 最后问卷
    this.refreshScore()
  }
  /**
   * 删除选项
   * @param {number} questionIndex 问卷系数
   * @param {number} opationIndex 选项系数
   */
  deleteOpation (questionIndex, opationIndex) {
    this.questionData[questionIndex].opationData.splice(opationIndex, 1)
    // 刷新问题总分数
    this.questionData[questionIndex].refreshScore()
    // 最后问卷
    this.refreshScore()
  }
  /**
   * 下移调整问题位置
   * @param {Object} questionIndex 原来的系数
   */
  questionDown (questionIndex) {
    let temp = this.questionData[questionIndex]
    this.questionData.splice(questionIndex, 1, this.questionData[questionIndex + 1])
    this.questionData.splice(questionIndex + 1, 1, temp)
  }
  /**
   * 上移调整问题位置
   * @param {Object} questionIndex 原来的系数
   */
  questionUp (questionIndex) {
    let temp = this.questionData[questionIndex]
    this.questionData.splice(questionIndex, 1, this.questionData[questionIndex - 1])
    this.questionData.splice([questionIndex - 1], 1, temp)
  }
  /**
   * 清空选项内容
   */
  refreshOpation (questionIndex, opationIndex) {
    // 设置分数
    this.setOpationScore(questionIndex, opationIndex, 0)
    this.questionData[questionIndex].opationData[opationIndex].name = ''
  }
}
