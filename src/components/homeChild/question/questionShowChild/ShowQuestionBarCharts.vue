<!-- ShowQuestionBarCharts.vue
// 问卷总览柱状图组件
import ShowQuestionBarCharts from '@/components/homeChild/question/questionShowChild/ShowQuestionBarCharts'
 -->
<template>
  <FlowItem>
    <ItemHead>问卷创建时间总览</ItemHead>
    <ItemBody>
      <div class="bar-echarts" ref="barChart"></div>
    </ItemBody>
  </FlowItem>
</template>

<script>
// echarts图表
import echarts from 'echarts'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
export default {
  props: ['inquiryData'],
  name: 'showQuestionBarCharts',
  data () {
    return {
      inquiryEchart: {}
    }
  },
  components: {
    ItemHead,
    ItemBody,
    FlowItem
  },
  computed: {},
  methods: {
    /**
     * 展示柱状图
     * @param {Array} inquriyMonth 要展示的每个月创建的数据
     */
    renderChart (inquiryMonth) {
      // 处理所有问卷然后加到展示里.
      if (this.$refs.barChart) {
        this.inquiryEchart = echarts.init(this.$refs.barChart)
        this.inquiryEchart.setOption({
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: '2%',
            left: '4%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'value',
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            }
          ],
          series: [
            {
              name: '直接访问',
              type: 'bar',
              barWidth: '60%',
              data: inquiryMonth
            }
          ]
        })
      }
    }
  },
  watch: {
    inquiryData (val) {
      let inquiryMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      if (val) {
        val.forEach(inquiry => {
          let inquiryDate = new Date(inquiry.create_time)
          inquiryMonth[inquiryDate.getMonth()]++
        })
      }
      this.renderChart(inquiryMonth)
    }
  }
}
</script>
<style scoped>
/* 右下角的图表开始 */
.bar-echarts {
  width: 100%;
  height: 400px;
}
/* 右下角的图标结束 */
</style>