<!-- IssueEdit.vue -->
<template>
  <div class="issue-right-body">
    <!-- 问题编辑组件 -->
    <div :key="questionIndex"
          class="issue-item"
          v-for="(question, questionIndex) in inquiryData.questionData">
      <span class="issue-number">{{questionIndex + 1}}</span>
      <h5>
        {{question.name}}
        <span class="score-span">
           此题满分为(
            <span class="max-score-span">{{question.maxScore}}</span>
           )
        </span>
      </h5>
      <div class="issue-opation-body">
        <div :key="index"
            v-for="(opation, index) in question.opationData" 
            class="issue-opation" 
            :class="{'active-opation': opation.isActive}"
            @click="activeOpation(questionIndex, index)">
          <i class="iconfont" :class="opation.isActive ? 'icon-yuanxingxuanzhongfill': 'icon-yuanxingweixuanzhong'"></i>
          <span class="opation-describe">{{opation.name}}</span>
        </div>
      </div>
      <IssueEditMenu :questionIndex="questionIndex"
                     :questionData="inquiryData.questionData"></IssueEditMenu>
      <IssueEditBox :question="question"
                    :questionIndex="questionIndex"
                    :questionData="inquiryData.questionData"></IssueEditBox>
    </div>
  </div>
</template>

<script>
// 问卷编辑设置盒子组件
import IssueEditBox from '@/components/homeChild/question/questionAddChild/addIssueChild/issueFormChild/IssueEditBox'
// 问卷编辑设置菜单组件
import IssueEditMenu from '@/components/homeChild/question/questionAddChild/addIssueChild/issueFormChild/IssueEditMenu'
export default {
  props: ['inquiryData'],
  name: 'issueedit',
  data () {
    return {
    }
  },
  components: {
    IssueEditBox,
    IssueEditMenu
  },
  computed: {
  },
  methods: {
    /**
     * 点击选项事件
     * @param {number} questionIndex 选中选项的题目系数
     * @param {number} opationIndex 选中的选项系数
     */
    activeOpation (questionIndex, opationIndex) {
      this.$store.commit('activeOpation',
        {
          questionIndex,
          opationIndex
        })
    }
  }
}
</script>
<style scoped>
/* 问卷体开始 */
.issue-right-body {
  width: 80%;
  margin: 0 auto;
  padding: 20px 60px;
  padding-bottom: 0;
  background: #F5F5F6;
  font-size: 14px;
  color: #666666;
}
.issue-right-body h5 {
  width: 100%;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 400;
  flex-shrink: 0;
}
.issue-opation-body {
  /* 最小高度是为了不挡住编辑box */
  width: 100%; min-height: 20px;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: space-between;
}
.issue-item {
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.issue-item:first-child {
  margin-top: 0;
}
.issue-opation {
  width: 48%;
  margin-top: 14px;
  padding: 8px 15px;
  background: #fff;
  flex-shrink: 0;
  border: 1px solid rgb(209, 210, 212);
  cursor: pointer;
  transition: .2s;
}
.issue-opation:hover {
  box-shadow: 0 1px 2px #888;
}
.issue-opation:nth-child(2),
.issue-opation:nth-child(1) {
  margin-top: 0;
}
.issue-opation input {
  display: none;
}
.opation-describe {
  margin-left: 8px;
}
.issue-number {
  width: 25px; height: 25px;
  background: #fff;
  border-radius: 50%;
  font-weight: 800;
  text-align: center;
  line-height: 25px;
  position: absolute;
  left: -40px;
  color: #666666;
}
.iconfont {
  font-size: 13.5px;
}
/* 点击之后的类 */
.active-opation {
  color: #fff;
  background: #61C9E5;
  border: 1px solid #61C9E5;
}
.score-span {
  margin-left: 15px;
}
.max-score-span {
  color: red;
}
</style>