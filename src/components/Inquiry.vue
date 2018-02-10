<!-- Inquiry.vue
// 用户问卷
import Inquiry from '@/components/Inquiry'
 -->
<template>
  <div class="inquiry-container">
    <h2 class="issue-title">
      {{inquiryData.name}}
    </h2>
    <p class="issue-describe">{{inquiryData.describe}}</p>
    <div class="issue-right-body">
      <div :key="questionIndex"
            class="issue-item"
            v-for="(question, questionIndex) in inquiryData.questionData">
        <span class="issue-number">{{questionIndex + 1}}</span>
        <h5>
          {{question.name}}
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
      </div>
      <div class="save-inquiry-button">
        <ButtonPack @click.native="saveAnswer">保存</ButtonPack>
      </div>
    </div>
  </div>
</template>

<script>
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  name: 'inquriy',
  data () {
    return {
    }
  },
  components: {
    ButtonPack
  },
  computed: {
    inquiryData () {
      return this.$store.state.inquiryEdit.inquiryData
    }
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
    },
    /**
     * 保存回答
     */
    saveAnswer () {
      this.$http.post('/saveAnswer', this.inquiryData)
      .then(res => {
        let result = res.data
        // 跳到分析页
        location.href = `/#/answerAnalyze/${result.answerId}`
      })
    }
  },
  beforeMount () {
    // 在这里查询inquiryData,然后展示.
    this.$store.dispatch('getInquiryInUser', this.$route.params.inquiryId)
  }
}
</script>
<style scoped>
/* 问卷背景开始 */
.inquiry-container {
  padding-top: 20px;
}
/* 问卷背景结束 */
/* 问卷头开始 */
.issue-title {
  margin-bottom: 10px;
  text-align: center;
  color: #42485B;
  font-weight: 400;
}
.issue-describe {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}
.save-inquiry-button {
  width: 80%;
  margin: 10px auto;
}
/* 问卷头结束 */
/* 问卷体开始 */
.issue-right-body {
  width: 80%;
  margin: 0 auto;
  padding: 20px 200px;
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
  width: 100%;
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
@media screen and (max-width: 680px){
  /* 问卷体开始 */
  .issue-right-body {
    width: 99%;
    padding: 20px 0;
  }
  .issue-number {
    left: 10px;
  }
  .issue-right-body h5 {
    padding-left: 45px;
  }
}
</style>