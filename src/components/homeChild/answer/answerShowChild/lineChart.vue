<!-- lineChart.vue
// 折线图
import lineChart from '@/components/homeChild/answer/answerShowChild/lineChart'
 -->
<template>
  <div ref="lineChart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['answerArr'],
  name: 'lineChart',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    renderLineChart (answerArr) {
      let xA = []
      let yA = []
      answerArr.forEach(answerItem => {
        xA.push(answerItem.score)
        yA.push(answerItem.num)
      })
      let answerEchart = echarts.init(this.$refs.lineChart)
      answerEchart.setOption({
        xAxis: {
          type: 'category',
          data: xA,
          name: '分'
        },
        yAxis: {
          type: 'value',
          name: '个数'
        },
        series: [{
          data: yA,
          type: 'line'
        }]
      })
    }
  },
  watch: {
    answerArr (value) {
      this.renderLineChart(value)
    }
  }
}
</script>
<style scoped>
</style>