<!-- HomeQuestionShow.vue -->
<template>
  <FlowContainer>
    <FlowColumn col="8">
      <ShowQuestionTable :inquiryData="inquiryData"></ShowQuestionTable>
    </FlowColumn>
    <FlowColumn col="4">
      <ShowQuestionDetail :inquiryData="inquiryData"></ShowQuestionDetail>
      <ShowQuestionBarCharts :inquiryData="inquiryData"></ShowQuestionBarCharts>
    </FlowColumn>
  </FlowContainer>
</template>

<script>
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// 问卷总览表格组件
import ShowQuestionTable from '@/components/homeChild/question/questionShowChild/ShowQuestionTable'
// 问卷数量展示组件
import ShowQuestionDetail from '@/components/homeChild/question/questionShowChild/ShowQuestionDetail'
// 问卷总览柱状图组件
import ShowQuestionBarCharts from '@/components/homeChild/question/questionShowChild/ShowQuestionBarCharts'
export default {
  name: 'homequestionshow',
  data () {
    return {
      inquiryData: []
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    ShowQuestionTable,
    ShowQuestionDetail,
    ShowQuestionBarCharts
  },
  computed: {},
  methods: {},
  beforeMount () {
    // 加载等待 ------------------------------
    this.$http.post('/home/manager/selectAllQuestion')
    .then(res => {
      // 等待结束 ----------------------------------
      // 这里用statusObj判断,为1就放到inquiryData中
      if (res.data.statusObj.status === 1) {
        this.inquiryData = res.data.inquiryData
      }
    })
  }
}
</script>
<style scoped></style>
