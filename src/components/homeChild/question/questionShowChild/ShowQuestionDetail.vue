<!-- ShowQuestionDetail.vue
// 问卷数量展示组件
import ShowQuestionDetail from '@/components/homeChild/question/questionShowChild/ShowQuestionDetail'
 -->
<template>
  <FlowItem>
    <ItemBody>
      <div class="inquiry-outline">
        <span>问卷数</span>
        <span>
          {{ inquiryData.length }}张
        </span>
      </div>
      <div class="inquiry-outline">
        <span>已发布</span>
        <span>
          {{ getPublishNum }}张
        </span>
      </div>
      <div class="inquiry-outline">
        <span>未发布</span>
        <span>
          {{ getUnPublishNum }}张
        </span>
      </div>
    </ItemBody>
  </FlowItem>
</template>

<script>
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
export default {
  props: ['inquiryData'],
  data () {
    return {
    }
  },
  components: {
    ItemBody,
    FlowItem
  },
  computed: {
    /**
     * 获取已发布问卷数
     */
    getPublishNum () {
      let publishNum = 0
      this.inquiryData.forEach(inquiry => {
        if (inquiry.switch === '1') {
          publishNum++
        }
      })
      return publishNum
    },
    /**
     * 获取未发布问卷数
     */
    getUnPublishNum () {
      return this.inquiryData.length - this.getPublishNum
    }
  },
  methods: {}
}
</script>
<style scoped>
/* 右上角问卷基本信息简介开始 */
.inquiry-outline {
  width: 100%; height: 40px;
  padding-left: 20px;
  margin-bottom: 10px;
  line-height: 40px;
  background: #F5F5F6;
  font-size: 12px;
  color: #666;
}
.inquiry-outline:last-child {
  margin-bottom: 0;
}
/* 右上角问卷基本信息简介结束 */
</style>