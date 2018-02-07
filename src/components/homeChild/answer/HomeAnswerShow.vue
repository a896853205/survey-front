<!-- HomeAnswerShow.vue -->
<template>
  <FlowContainer>
    <FlowColumn col="8">
      <FlowItem>
        <AddPublishInquiryDetailShow></AddPublishInquiryDetailShow>
      </FlowItem>
      <FlowItem>
        <el-table border
              class="inquiry-table" 
              :data="answerData"
              :header-cell-style="headerCellStyle"
              :header-row-style="headerRowStyle"
              :row-style="rowStyle"
              :cell-style="cellStyle">
          <el-table-column
              prop="dt"
              label="日期">
          </el-table-column>
          <el-table-column
              prop="score"
              label="分数">
          </el-table-column>
        </el-table>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="4">
      <FlowItem>
        <el-select v-model="inquiryValue"
                   placeholder="请选择问卷"
                   @change="getInquriy">
          <el-option
            v-for="(inquiry, index) in inquiryArr"
            :key="index"
            :label="inquiry.title"
            :value="inquiry.id">
          </el-option>
        </el-select>
      </FlowItem>
      <FlowItem class="pie-container">
        <PieChart class="pie-chart" :analyzeArr="analyzeArr"></PieChart>
      </FlowItem>
      <FlowItem>
        <lineChart class="line-chart" :answerArr="getAnswerLineData"></lineChart>
      </FlowItem>
    </FlowColumn>
  </FlowContainer>
</template>

<script>
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
// 回答总体分析饼形图
import PieChart from '@/components/analyzeChild/PieChart'
// addPublishInquiryDetailShow 问卷详细信息组件
import AddPublishInquiryDetailShow from '@/components/homeChild/question/questionAddChild/addPublishChild/AddPublishInquiryDetailShow'
// 折线图
import lineChart from '@/components/homeChild/answer/answerShowChild/lineChart'
export default {
  name: 'homeanswershow',
  data () {
    return {
      analyzeArr: [],
      inquiryArr: [],
      inquiryValue: '',
      answerData: []
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    FlowItem,
    PieChart,
    AddPublishInquiryDetailShow,
    lineChart
  },
  computed: {
    getAnalyze () {
      this.$http.post('/home/manager/getAnalyzeByInquiyrId', {
        inquiryId: this.$store.state.inquiryEdit.inquiryData.id
      })
      .then(res => {
        if (res.data.statusObj.status === 1) {
          // 展示所有数据
          this.analyzeArr = res.data.analyzeArr
        }
      })
    },
    getAnswer () {
      // 获取回答所有信息
      this.$http.post('/home/manager/getAllAnswerByInquiryId', {
        inquiryId: this.$store.state.inquiryEdit.inquiryData.id
      })
      .then(res => {
        if (res.data.statusObj.status === 1) {
          // 展示所有数据
          this.answerData = res.data.answerArr
        }
      })
    },
    getAnswerLineData () {
      let lineData = []
      this.answerData.forEach(answerItem => {
        let isHave = false
        lineData.forEach(lineItem => {
          if (answerItem.score === lineItem.score) {
            lineItem.num++
            isHave = true
          }
        })
        if (!isHave) {
          lineData.push({
            score: answerItem.score,
            num: 1
          })
        }
      })
      // 然后排序
      lineData.sort((front, behind) => {
        return parseInt(front.score) > parseInt(behind.score)
      })
      return lineData
    }
  },
  methods: {
    /**
     * 根据answerid取这和回答的所有数据
     */
    getOneAnswerData () {
    },
    getInquriy (opation) {
      this.inquiryArr.forEach(inquiry => {
        if (inquiry.id === opation) {
          // 获取问卷信息
          this.$store.dispatch('getInquiry', inquiry.id)
        }
      })
    },
    // 表格样式回调
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
     * 表头行样式回调函数开始
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
    /**
     * 表头行样式回调函数结束
     */
  },
  beforeMount () {
    this.$http.post('/home/manager/selectAllQuestion')
    .then(res => {
      this.inquiryArr = res.data.inquiryData
      // 这里把inquiryArr[0]的所有信息展示.
      this.getInquriy(this.inquiryArr[0].id)
    })
  },
  watch: {
    getAnalyze () {},
    getAnswer () {},
    getAnswerLineData () {}
  }
}
</script>
<style scoped>
/* 饼形图开始 */
.pie-chart {
  width: 100%; height: 400px;
}
div.pie-container {
  background: #373D41;
}
/* 饼形图结束 */
/* 折线图开始 */
.line-chart {
  width: 100%; height: 400px;
}
/* 折线图结束 */
</style>
<style>
.el-input__inner {
  border-radius: 0;
  width: 100%;
}
.el-select {
  width: 100%;
}
</style>