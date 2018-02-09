<!-- PieAndBarChart.vue
// 饼型和条型图
import PieAndBarChart from '@/components/homeChild/persion/persionChild/PieAndBarChart'
 -->
<template>
  <div ref="pieAndBarChart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['managerArr'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    renderChart (managerArr) {
      let Xa = []
      let unPublishData = []
      let publishData = []
      managerArr.forEach((managerItem, index) => {
        Xa.push(managerItem.name)
        unPublishData.push(0)
        publishData.push(0)
        managerItem.inquiryData.forEach(inquiryItem => {
          if (inquiryItem.switch === '1') {
            publishData[index]++
          } else {
            unPublishData[index]++
          }
        })
      })
      let managerEchart = echarts.init(this.$refs.pieAndBarChart)
      managerEchart.setOption({
        color: ['#C23531', '#61A0A8'],
        angleAxis: {
        },
        radiusAxis: {
          type: 'category',
          data: Xa,
          z: 20
        },
        polar: {
        },
        series: [{
          type: 'bar',
          data: unPublishData,
          coordinateSystem: 'polar',
          name: '未发布问卷数量',
          stack: 'a'
        }, {
          type: 'bar',
          data: publishData,
          coordinateSystem: 'polar',
          name: '已发布问卷数量',
          stack: 'a'
        }],
        legend: {
          show: true,
          data: ['未发布问卷数量', '已发布问卷数量']
        }
      })
    }
  },
  watch: {
    managerArr (newValue) {
      this.renderChart(newValue)
    }
  }
}
</script>
<style scoped>
</style>