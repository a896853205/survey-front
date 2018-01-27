<!-- AddIssueForm.vue -->
<template>
  <HomeItem widType="3">
    <ItemHead>问卷编辑区</ItemHead>
    <ItemBody>
      <h2 class="issue-title">
        {{inquiryData.name}}
        <span class="inquiry-score">
          总分数(
            <span class="inquiry-score-max">{{inquiryData.maxScore}}</span>
          )
        </span>
      </h2>
      <p class="issue-describe">{{inquiryData.describe}}</p>
      <IssueEdit :inquiryData="inquiryData"></IssueEdit>
      <div class="save-inquiry-button">
        <ButtonPack @click.native="saveInquiry">保存问卷</ButtonPack>
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
// 问卷编辑设置组件
import IssueEdit from '@/components/homeChild/question/questionAddChild/addIssueChild/issueFormChild/IssueEdit'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  name: 'addissueform',
  data () {
    return {}
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    IssueEdit,
    ButtonPack
  },
  computed: {
    inquiryData () {
      return this.$store.state.inquiryEdit.inquiryData
    }
  },
  methods: {
    saveInquiry () {
      this.$http.post('/home/manager/saveInquiry', {
        inquiryInfo: this.inquiryData
      })
      .then(res => {
        // 跳页
        alert('保存成功,跳页了')
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
<style scoped>
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
  margin: 0 auto;
}
/* 问卷头结束 */
.inquiry-score {
  margin-left: 20px;
}
.inquiry-score-max {
  color: red;
}
</style>