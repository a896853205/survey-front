<!-- HomeQuestionShow.vue -->
<template>
  <div class="flow-layout">
    <div class="flow-container flow-large">
      <div class="flow-item">
        <el-table border
                  class="inquiry-table" 
                  :data="inquiryData"
                  :header-cell-style="headerCellStyle"
                  :header-row-style="headerRowStyle"
                  :row-style="rowStyle"
                  :cell-style="cellStyle">
          <el-table-column
            prop="title"
            label="问卷名">
          </el-table-column>
          <el-table-column
            label="问卷类型">
            <template slot-scope="scope">
              调查问卷
            </template>
          </el-table-column>
          <el-table-column
            :formatter="inquiryStatus"
            prop="state"
            label="问卷状态">
          </el-table-column>
          <el-table-column
            :formatter="inquirySwitch"
            prop="switch"
            label="是否发布">
          </el-table-column>
          <el-table-column
            label="操作"
            width="90px">
            <template slot-scope="scope">
              <a :href="operateInquriyUrl(scope.$index, inquiryData)" class="icon-edit iconfont icon-link"></a>
              <i @click="deleteInquiry(scope.$index, inquiryData)" class="iconfont icon-delete icon-link"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="flow-container flow-small">
      <div class="flow-item">
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
      </div>
      <div class="flow-item">
        <ItemHead>问卷展示</ItemHead>
        <ItemBody>
          <div class="bar-echarts" ref="barChart"></div>
        </ItemBody>
      </div>
    </div>
  </div>
</template>

<script>
// echarts图表
import echarts from 'echarts'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
export default {
  name: 'homequestionshow',
  data () {
    return {
      inquiryData: []
    }
  },
  components: {
    ItemHead,
    ItemBody
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
  methods: {
    /**
     * 问卷状态数转化成文字
     * @param {Number} row 行数
     * @param {Number} column 列数
     * @param {String} cellValue 单元值
     */
    inquiryStatus (row, column, cellValue) {
      switch (cellValue) {
        case '1':
          return '添加题目'
        case '2':
          return '添加结语'
        case '3':
          return '编辑完成'
        default:
          return ''
      }
    },
    /**
     * 问卷开启状态数转化成文字
     * @param {Number} row 行数
     * @param {Number} column 列数
     * @param {String} cellValue 单元值
     */
    inquirySwitch (row, column, cellValue) {
      switch (cellValue) {
        case '0':
          return '未发布'
        case '1':
          return '已发布'
        default:
          return ''
      }
    },
    /**
     * 问卷操作的url
     * @param {Number} index 系数
     * @param {Array} inquiryData 问卷数组
     */
    operateInquriyUrl (index, inquiryData) {
      return `${location.origin}/#/home/questionAdd/AddIssue/${inquiryData[index].id}`
    },
    /**
     * 删除问卷
     * @param {Number} index 系数
     * @param {Array} inquiryData 问卷数组
     */
    deleteInquiry (index, inquiryData) {
      this.$http.post('/home/manager/deleteInquiry', {
        inquiryId: inquiryData[index].id
      })
      .then(res => {
        if (res.data.statusObj.status === 1) {
          this.inquiryData.splice(index, 1)
          this.$store.commit('alert', {title: '问卷操作', content: '删除成功'})
        }
      })
    },
    renderChart () {
      // 处理所有问卷然后加到展示里.
      let inquiryMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.inquiryData.forEach(inquiry => {
        let inquiryDate = new Date(inquiry.create_time)
        inquiryMonth[inquiryDate.getMonth()]++
      })
      let inquiryEchart = echarts.init(this.$refs.barChart)
      inquiryEchart.setOption({
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
    },
    /**
     * 表头样式回调函数
     */
    headerCellStyle ({row, column, rowIndex, columnIndex}) {
      return {
        textAlign: 'center',
        height: '35px',
        padding: '0',
        fontWeight: '400',
        background: '#F7F9F8',
        color: '#373D41'
      }
    },
    /**
     * 表头行样式回调函数
     */
    headerRowStyle ({row, rowIndex}) {
      return {
        height: '35px',
        fontSize: '12px'
      }
    },
    rowStyle ({row, rowIndex}) {
      return {
        height: '35px',
        fontSize: '12px'
      }
    },
    cellStyle ({row, column, rowIndex, columnIndex}) {
      return {
        textAlign: 'center',
        height: '35px',
        padding: '0',
        color: '#373D41'
      }
    }
  },
  beforeMount () {
    this.$http.post('/home/manager/selectAllQuestion')
    .then(res => {
      // 这里用statusObj判断,为1就放到inquiryData中
      if (res.data.statusObj.status === 1) {
        this.inquiryData = res.data.inquiryData
        // 这个调用渲染echarts
        this.renderChart()
      }
    })
  }
}
</script>
<style scoped>
.flow-layout {
  display: flex;
  justify-content: space-between;
}
.flow-container {
  display: flex;
  flex-direction: column;
}
.flow-small {
  width: 32.5%;
}
.flow-large {
  width: 66.25%;
}
.flow-item {
  width: 100%;
  margin: 8px 0;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.15);
}
/* 表格中的编辑开始 */
.icon-link,
.icon-link:link,
.icon-link:visited,
.icon-link:hover,
.icon-link:active {
  font-size: 20px;
  color: #333;
  margin-right: 10px;
}
.icon-edit:hover {
  color: #00C1DE;
}
.icon-delete:hover {
  color: #FF0041;
  cursor: pointer;
}
.icon-link:last-child {
  margin-right: 0;
}
/* 表格中的编辑结束 */
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
/* 右下角的图表开始 */
.bar-echarts {
  width: 100%;
  height: 400px;
}
/* 右下角的图标结束 */
</style>
