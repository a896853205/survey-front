<!-- IssueEditBox.vue -->
<template>
  <div class="edit-outer-box" :class="{unedit: !question.isEdit}">
    <div class="edit-box">
      <div class="edit-first-row">
        <span class="first-title">
          题目:
        </span>
        <div class="first-input">
          <inputPack @getValue="getValue" 
                    type="text"
                    :value="question.name"
                    :inputName="question"></inputPack>
        </div>
        <div class="first-opation">
          <span @click="questionUp(questionIndex)" class="iconfont icon-less" title="题目上移"></span>
          <span @click="questionDown(questionIndex)" class="iconfont icon-moreunfold" title="题目下移"></span>
          <span @click="addOpation(questionIndex)" class="iconfont icon-add" title="增加选项"></span>
        </div>
      </div>
      <hr class="edit-hr">
      <div class="edit-second-row">
        <span class="second-title">
          选项:
        </span>
        <div class="second-opation-opation">
          <div class="second-opation-row"
                :key="index"
                v-for="(opation, index) in question.opationData">
            <div class="second-opation-input">
              <InputPack  type="text"
                        @getValue="getValue"
                        :value="opation.name"
                        :inputName="opation"></InputPack>
            </div>
            <div class="second-opation-detail">
              <span @click="deleteOpation(questionIndex, index)" class="iconfont icon-delete"></span>
              <span @click="refreshOpation(questionIndex, index)" class="iconfont icon-refresh"></span>
            </div>
          </div>
        </div>
      </div>
      <ButtonPack @click.native="saveQuestion(question)">确定及保存</ButtonPack>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    /**
     * 题目上移
     * @param {number} questionIndex 问卷的系数
     */
    questionUp (questionIndex) {
      if (questionIndex === 0) {
        alert('第一题不能上移啦')
      } else {
        // 与上题交换
        let temp = this.questionData[questionIndex]
        this.$set(this.questionData, questionIndex, this.questionData[questionIndex - 1])
        this.$set(this.questionData, questionIndex - 1, temp)
      }
    },
    /**
     * 题目下移
     * @param {number} questionIndex 问卷系数
     */
    questionDown (questionIndex) {
      if (questionIndex === this.questionData.length - 1) {
        alert('最后一题不能下移啦')
      } else {
        // 与下题交换
        let temp = this.questionData[questionIndex]
        this.$set(this.questionData, questionIndex, this.questionData[questionIndex + 1])
        this.$set(this.questionData, questionIndex + 1, temp)
      }
    },
    /**
     * 增加当前问题的选项
     * @param {number} questionIndex 问卷系数
     */
    addOpation (questionIndex) {
      this.questionData[questionIndex].opationData.push({
        name: '新建选项',
        value: '新建选项',
        isActive: false
      })
    },
    /**
     * 删除选中选项
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    deleteOpation (questionIndex, opationIndex) {
      this.questionData[questionIndex].opationData.splice(opationIndex, 1)
    },
    /**
     * 删除选中选项
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    refreshOpation (questionIndex, opationIndex) {
      this.$set(this.questionData[questionIndex].opationData, opationIndex, '')
    },
    /**
     * 保存问题
     * @param {Object} question 点击保存所在的问题
     */
    saveQuestion (question) {
      // 这里提交(把整个数组提交)---进入换冲
      // 提交成功后关闭运行下面代码 ------------------------
      question.isEdit = false
    },
    /**
     * input获取值
     */
    getValue (value, opation) {
      opation.name = value
    }
  }
}
</script>
<style scoped>
/* 编辑框内部结构开始 */
.edit-first-row {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}
.edit-hr {
  width: 100%;
  border: 1px solid rgb(209, 210, 212);
  border-top: 0;
}
.edit-second-row {
  width: 100%;
  margin-top: 10px;
  display: flex;
}
/* 第一行开始 */
.first-title {
  width: 25%;
  flex-shrink: 0;
  text-align: center;
  line-height: 40px;
}
.first-input{
  width: 25%;
  flex-shrink: 0;
}
.first-opation {
  width: 50%;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  line-height: 40px;
}
/* 第一行结束 */
/* 第二行开始 */
.second-title {
  width: 25%;
  flex-shrink: 0;
  text-align: center;
  line-height: 40px;
}
.second-opation-row {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}
.second-opation-opation {
  width: 75%;
  flex-shrink: 0;
  flex-wrap: wrap;
  display: flex;
}
.second-opation-input {
  width: 33.333333333333333333333333%;
  flex-shrink: 0;
}
.second-opation-detail {
  width: 66.666666666666666666666666%;
  display: flex;
  justify-content: space-around;
}
.second-opation-detail span {
  line-height: 40px;
}
/* 第二行结束 */
span.iconfont {
  font-size: 20px;
  cursor: pointer;
}
span.iconfont:hover {
  color: #61C9E5;
}
span.icon-delete:hover {
  color: red;
}
/* 编辑框内部结构结束 */
</style>