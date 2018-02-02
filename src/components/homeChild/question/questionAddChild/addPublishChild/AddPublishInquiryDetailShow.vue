<!-- AddPublishInquiryDetailShow.vue
// addPublishInquiryDetailShow 问卷详细信息组件
import AddPublishInquiryDetailShow from '@/components/homeChild/question/questionAddChild/addPublishChild/AddPublishInquiryDetailShow'
 -->
<template>
  <HomeItem widType="2">
    <ItemHead>
      问卷详细信息
    </ItemHead>
    <ItemBody class="inquiry-detail-info">
      <div class="detail-item">
        <h4 class="detail-title">
          问卷信息
        </h4>
        <ul>
          <li>开始时间: {{getInquiryData.beginTime}}</li>
          <li>结束时间: {{getInquiryData.endTime}}</li>
          <li>问卷总分: {{getInquiryData.maxScore}}</li>
          <li>问卷标题: {{getInquiryData.name}}</li>
          <li>问卷描述: {{getInquiryData.describe}}</li>
        </ul>
      </div>
      <div class="detail-item">
        <h4 class="detail-title">
          问题信息
        </h4>
        <ul>
          <li>问题总数: {{getQuestionData.length}}</li>
          <li>问题最高分: {{getQuestionMaxScore}}</li>
          <li>问题最低分: {{getQuestionMinScore}}</li>
          <li>问题平均分: {{getQuestionEveryScore}}</li>
        </ul>
      </div>
      <div class="detail-item">
        <h4 class="detail-title">选项信息</h4>
        <ul>
          <li>选项总数: {{getOpationData.length}}</li>
          <li>选项最高分: {{getOpationMaxScore}}</li>
          <li>选项最低分: {{getOpationMinScore}}</li>
          <li>选项平均分: {{getOpationEveryScore}}</li>
        </ul>
      </div>
      <div class="detail-item">
        <h4 class="detail-title">结语信息</h4>
        <ul>
          <li>选项数: {{getEpilog.length}}</li>
        </ul>
      </div>
    </ItemBody>
  </HomeItem>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
export default {
  name: 'addPublishInquiryDetailShow',
  data () {
    return {
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody
  },
  computed: {
    /**
     * 获取问题的最大分分值
     */
    getQuestionMaxScore () {
      let maxScore = 0
      let questionData = this.getQuestionData
      if (questionData[0]) {
        maxScore = questionData[0].maxScore
        questionData.forEach(question => {
          if (question.maxScore > maxScore) {
            maxScore = question.maxScore
          }
        })
      }
      return maxScore
    },
    /**
     * 获取问题的最小分分值
     */
    getQuestionMinScore () {
      let maxScore = 0
      let questionData = this.getQuestionData
      if (questionData[0]) {
        maxScore = questionData[0].maxScore
        questionData.forEach(question => {
          if (question.maxScore < maxScore) {
            maxScore = question.maxScore
          }
        })
      }
      return maxScore
    },
    /**
     * 获取问题的平均分分值
     */
    getQuestionEveryScore () {
      let totalScore = 0
      let questionData = this.getQuestionData
      questionData.forEach(question => {
        totalScore += question.maxScore
      })
      if (!questionData.length) {
        return 0
      } else {
        return totalScore / questionData.length
      }
    },
    /**
     * 获取问卷信息
     */
    getInquiryData () {
      return this.$store.state.inquiryEdit.inquiryData
    },
    /**
     * 获取问题信息
     */
    getQuestionData () {
      if (this.$store.state.inquiryEdit.inquiryData.questionData) {
        return this.$store.state.inquiryEdit.inquiryData.questionData
      } else {
        return []
      }
    },
    /**
     * 获取选项信息
     */
    getOpationData () {
      let opationData = []
      let questionData = this.getQuestionData
      questionData.forEach(question => {
        opationData = opationData.concat(question.opationData)
      })
      return opationData
    },
    /**
     * 获取选项最高分
     */
    getOpationMaxScore () {
      let maxScore = 0
      let opationData = this.getOpationData
      if (opationData[0]) {
        maxScore = opationData[0].score
        opationData.forEach(opation => {
          if (opation.score > maxScore) {
            maxScore = opation.score
          }
        })
      }
      return maxScore
    },
    /**
     * 获取问题的最小分分值
     */
    getOpationMinScore () {
      let maxScore = 0
      let opationData = this.getOpationData
      if (opationData[0]) {
        maxScore = opationData[0].score
        opationData.forEach(opation => {
          if (opation.score < maxScore) {
            maxScore = opation.score
          }
        })
      }
      return maxScore
    },
    /**
     * 获取问题的平均分分值
     */
    getOpationEveryScore () {
      let totalScore = 0
      let opationData = this.getOpationData
      opationData.forEach(opation => {
        totalScore += opation.score
      })
      if (!opationData.length) {
        return 0
      } else {
        return totalScore / opationData.length
      }
    },
    /**
     * 获取结语
     */
    getEpilog () {
      return this.$store.state.inquiryEdit.inquiryEpilog
    }
  },
  methods: {}
}
</script>
<style scoped>
.detail-item {
  flex-grow: 1;
  width: 33%;
  margin-bottom: 20px;
}
.detail-item:last-child {
  margin-bottom: 0;
}
.detail-title {
  font-size: 14px;
  margin-bottom: 8px;
}
.inquiry-detail-info {
  display: flex;
  flex-wrap: wrap;
}
.inquiry-detail-info ul li {
  height: 26px;
  line-height: 26px;
  font-size: 12px;
}
</style>