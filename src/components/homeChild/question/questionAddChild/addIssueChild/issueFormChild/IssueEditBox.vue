<!-- IssueEditBox.vue -->
<template>
  <div class="edit-outer-box" :class="{unedit: !question.isEdit}">
    <div class="edit-box">
      <div class="edit-first-row">
        <span class="first-title">
          题目:
        </span>
        <div class="first-input">
          <inputPack @getValue="setTitle" 
                    type="text"
                    :value="question.name"
                    :inputName="questionIndex"></inputPack>
        </div>
        <div class="first-opation">
          <span @click="questionUp(questionIndex)" class="iconfont icon-less" title="题目上移"></span>
          <span @click="questionDown(questionIndex)" class="iconfont icon-moreunfold" title="题目下移"></span>
          <span @click="addOpation(questionIndex)" class="iconfont icon-add" title="增加选项"></span>
        </div>
      </div>
      <div class="edit-second-row">
        <span class="second-title">
          选项:
        </span>
        <div class="second-opation-opation">
          <div class="second-opation-row"
                :key="index"
                v-for="(opation, index) in question.opationData">
            <div class="second-opation-input">
              <InputPack type="text"
                        @getValue="setOpation"
                        :value="opation.name"
                        :inputName="{questionIndex, index}"></InputPack>
            </div>
            <div class="second-opation-detail">
              <div class="input-group">
                <InputPack type="text"
                         @getValue="setScore"
                         :value="opation.score"
                         :inputName="{questionIndex, index}"
                         ></InputPack>
                <span>分</span>
              </div>
              <span @click="deleteOpation(questionIndex, index)" class="iconfont icon-delete"></span>
              <span @click="refreshOpation(questionIndex, index)" class="iconfont icon-refresh"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="save-button">
        <ButtonPack class="save-question-button" @click.native="saveQuestion(questionIndex)">确定及保存</ButtonPack>
        <ButtonPack class="add-question-button" @click.native="addQuestion(questionIndex)">增加问题</ButtonPack>
      </div>
    </div>
  </div>
</template>

<script>
// input组件
import InputPack from '@/components/form/InputPack'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  props: ['question', 'questionIndex', 'questionData'],
  data () {
    return {
    }
  },
  components: {
    InputPack,
    ButtonPack
  },
  computed: {},
  methods: {
    /**
     * 题目上移
     * @param {number} questionIndex 问卷的系数
     */
    questionUp (questionIndex) {
      if (questionIndex === 0) {
        // 这里以后更改成好看的alert ------------------
        alert('第一题不能上移啦')
      } else {
        this.$store.commit('questionUp', questionIndex)
      }
    },
    /**
     * 题目下移
     * @param {number} questionIndex 问卷系数
     */
    questionDown (questionIndex) {
      if (questionIndex === this.questionData.length - 1) {
        // 这里以后更改成好看的alert ------------------
        alert('最后一题不能下移啦')
      } else {
        this.$store.commit('questionDown', questionIndex)
      }
    },
    /**
     * 增加当前问题的选项
     * @param {number} questionIndex 问卷系数
     */
    addOpation (questionIndex) {
      this.$store.commit('addOpation', questionIndex)
    },
    /**
     * 删除选中选项
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    deleteOpation (questionIndex, opationIndex) {
      this.$store.commit('deleteOpation',
        {
          questionIndex,
          opationIndex
        })
    },
    /**
     * 清空选中选项内容
     * @param {number} questionIndex 问卷系数
     * @param {number} opationIndex 选项系数
     */
    refreshOpation (questionIndex, opationIndex) {
      this.$store.commit('refreshOpation', {questionIndex, opationIndex})
    },
    /**
     * 保存问题
     * @param {number} questionIndex 点击保存所在的问题系数
     */
    saveQuestion (questionIndex) {
      this.$store.dispatch('saveQuestion', questionIndex)
    },
    /**
     * 在index后增加问题
     * @param {number} questionIndex 问题系数
     */
    addQuestion (questionIndex) {
      this.$store.commit('addQuestion', questionIndex)
    },
    /**
     * 修改自己的分数
     * @param {number} value 分数
     * @param {Object} opation 修改分数的选项
     */
    setScore (value, {questionIndex, index}) {
      this.$store.commit('changeScore', {
        questionIndex,
        opationIndex: index,
        value
      })
    },
    /**
     * 设置问题标题
     * @param {Stirng} value 问卷的标题
     * @param {number} questionIndex 问卷的系数
     */
    setTitle (value, questionIndex) {
      this.$store.commit('setQuestionTitle', {
        questionIndex,
        value
      })
    },
    /**
     * 设置问卷选项
     * @param {String} value 问卷选项
     * @param {number} questionIndex 问题系数
     * @param {number} opationIndex 选项系数
     */
    setOpation (value, {questionIndex, index}) {
      this.$store.commit('setOpationTitle', {
        questionIndex,
        opationIndex: index,
        value
      })
    }
  }
}
</script>
<style scoped>
.edit-outer-box {
  flex-grow: 1;
  margin-left: -60px;
  margin-right: -60px;
  margin-top: 10px;
  max-height: 500px;
  overflow: auto;
  transition: .2s;
  border-left: 2px dotted #fff;
  border-right: 2px dotted #fff;
  z-index: 2;
}
.unedit {
  max-height: 10px;
}
.edit-box {
  width: 100%;
  padding: 10px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
}
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
.input-group {
  display: flex;
}
.input-group input {
  width: 80%;
}
.input-group span {
  width: 20%;
  border: 1px solid #CCCCCC;
  border-left: 0;
  background: #F5F5F6;
  text-align: center;
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
/* 按钮组开始 */
.save-button {
  width: 100%;
  display: flex;
  justify-content: center;
}
.save-button button {
  width: 25%;
  font-weight: 300;
}
.save-button button:hover {
  font-weight: 300;
}
/* 保存按钮开始 */
.save-button .save-question-button {
  background: #42485B;
}
.save-button .save-question-button:hover {
  background: rgb(59, 64, 82);
}
/* 保存按钮结束 */
/* 增加问题按钮开始 */
.save-button .add-question-button{
  background: #F5F5F6;
  color: #666666;
}
.save-button .add-question-button:hover {
  background: rgb(237, 237, 238);
}
/* 增加问题按钮结束 */
/* 按钮组结束 */
/* 编辑框内部结构结束 */
</style>