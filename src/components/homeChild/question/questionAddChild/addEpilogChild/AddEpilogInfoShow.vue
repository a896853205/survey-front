<!-- AddEpilogInfoShow
// addEpilogInfoShow 右边问卷数据展示
import AddEpilogForm from '@/components/homeChild/question/questionAddChild/addEpilogChild/AddEpilogInfoShow'
 -->
<template>
  <HomeItem widType="1" class="inquiry-info-show">
    <ItemHead>
      问卷信息一览表
    </ItemHead>
    <ItemBody>
      <span class="inquiry-info-show-item">
        <span class="info-show-item-left">问题数</span>
        <span class="info-show-item-right">
          {{getQuestionNum}}
        </span>
      </span>
      <span class="inquiry-info-show-item">
        <span class="info-show-item-left">选项数</span>
        <span class="info-show-item-right">
          {{getOpationNum}}
        </span>
      </span>
      <span class="inquiry-info-show-item">
        <span class="info-show-item-left">结语数</span>
        <span class="info-show-item-right">
          {{getEpilog.length}}
        </span>
      </span>
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
  name: 'addEpilogInfoShow',
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
     * 获取问题数
     */
    getQuestionNum () {
      if (this.$store.state.inquiryEdit.inquiryData.questionData) {
        return this.$store.state.inquiryEdit.inquiryData.questionData.length
      } else {
        return 0
      }
    },
    /**
     * 获取选项数
     */
    getOpationNum () {
      if (this.$store.state.inquiryEdit.inquiryData.questionData) {
        let totalOpationNum = 0
        this.$store.state.inquiryEdit.inquiryData.questionData.forEach(item => {
          totalOpationNum += item.opationData.length
        })
        return totalOpationNum
      } else {
        return 0
      }
    },
    /**
     * 从vuex中获取值
     */
    getEpilog () {
      return this.$store.state.inquiryEdit.inquiryEpilog
    }
  },
  methods: {}
}
</script>
<style scoped>
/* 问卷基本信息展示开始 */
.inquiry-info-show {
  align-self: flex-start;
}
.inquiry-info-show-item {
  width: 100%; height: 40px;
  display: flex;
  line-height: 40px;
  margin-bottom: 8px;
  background: #F5F5F6;
}
.inquiry-info-show-item:last-child {
  margin-bottom: 0;
}
.info-show-item-left {
  width: 50%;
  margin-left: 30px;
  color: #666;
  font-size: 12px;
}
.info-show-item-right {
  width: 50%;
  font-size: 18px;
  color: #C6D0D4;
}
/* 问卷基本信息展示结束 */
</style>