<!-- PieChart
// 回答总体分析饼形图
import PieChart from '@/components/analyzeChild/PieChart'
 -->
<template>
  <div ref="pieChart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['analyzeArr'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    renderChart (analyzeArr) {
      let chartData = []
      let legendData = []
      // 数据处理
      analyzeArr.forEach(analyzeItem => {
        chartData.push({
          value: analyzeItem.num,
          name: analyzeItem.score
        })
        legendData.push(analyzeItem.score)
      })
      let inquiryEchart = echarts.init(this.$refs.pieChart)
      inquiryEchart.setOption({
        backgroundColor: 'rgba(0,0,0,0)',
        color: ['#eac736', '#50a3ba', '#d94e5d'],
        title: {
          text: '分值分布',
          x: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data: legendData,
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: '分数分布',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: chartData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  watch: {
    analyzeArr (newValue) {
      this.renderChart(newValue)
    }
  }
}
</script>
<style scoped>
</style>