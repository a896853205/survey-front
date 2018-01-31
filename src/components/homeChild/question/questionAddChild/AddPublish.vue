<!-- AddPublish.vue -->
<template>
  <div class="row">
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
    <HomeItem class="inquiry-link-container" widType="1">
      <ItemBody class="inquiry-link">
        <div>
          <img class="QR-code-img" :src="QRUrl"/>
        </div>
        <div class="inquiry-link-right">
          <span class="inquiry-link-right-title">问卷链接:</span>
          <p class="inquiry-link-right-link">{{inquiryUrl}}</p>
        </div>
      </ItemBody>
    </HomeItem>
    <HomeItem widType="1">
      <ItemHead>
        问卷发布状态
      </ItemHead>
      <ItemBody>
        <div v-if="getInquiryData.toggle === '0'" class="unpublish-publish-container">
          <ButtonPack class="un-publish-button">未发布</ButtonPack>
          <ButtonPack @click.native="publish">点击发布</ButtonPack>
        </div>
        <div v-if="getInquiryData.toggle === '1'" class="unpublish-publish-container">
          <ButtonPack @click.native="disPublish">点击取消发布</ButtonPack>
          <ButtonPack class="un-publish-button">已发布</ButtonPack>
        </div>
      </ItemBody>
    </HomeItem>
  </div>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  name: 'addpublish',
  data () {
    return {
      QRUrl: '',
      inquiryUrl: ''
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    ButtonPack
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
  methods: {
    publish () {
      this.$http.post('/home/manager/toggle', {
        inquiryId: this.getInquiryData.id,
        inquriySwitch: '1'
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          this.$store.commit('toggleInquiry', '1')
          this.$store.commit('goProcess', 5)
        } else {
          alert('发布未成功')
        }
      })
    },
    disPublish () {
      this.$http.post('/home/manager/toggle', {
        inquiryId: this.getInquiryData.id,
        inquriySwitch: '0'
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          this.$store.commit('toggleInquiry', '0')
          this.$store.commit('goProcess', 4)
        } else {
          alert('取消发布未成功')
        }
      })
    }
  },
  beforeMount () {
    // 这里判断url中是否有id,如果有查询,如果没有跳到选择类别
    // 查询问卷信息,
    this.$store.commit('goProcess', 4)
    let inquiryId = this.$route.params.inquiryId
    this.inquiryUrl = `${location.origin}/inquiry/${inquiryId}`
    this.QRUrl = `http://qr.liantu.com/api.php?text=${this.inquiryUrl}`
    this.$store.dispatch('getInquiry', inquiryId)
  }
}
</script>
<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.inquiry-link {
  display: flex;
  font-size: 14px;
  justify-content: space-around;
}
.inquiry-link-container {
  align-self: flex-start;
}
.QR-code-img {
  width: 110px;
}
.detail-item {
  flex-grow: 1;
  width: 33%;
  margin-bottom: 20px;
}
.detail-item:last-child {
  margin-bottom: 0;
}
.inquiry-link-right {
  margin-top: 5px;
  margin-left: 20px;
}
.inquiry-link-right-title {
  display: block;
  padding-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
}
.inquiry-link-right-link {
  font-size: 12px;
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
/* 发布按钮开始 */
.unpublish-publish-container {
  display: flex;
}
button.un-publish-button{
  background: #F5F5F6;
  font-weight: 400;
  color: #666;
  box-shadow: 0 0 0 #fff;
}
button.un-publish-button:hover {
  background: #F5F5F6;
  cursor: not-allowed;
}
/* 发布按钮结束 */
</style>