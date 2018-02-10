<!-- persion.vue
// 人员管理组件
import Persion from '@/components/homeChild/persion/Persion'
 -->
<template>
  <FlowContainer>
    <FlowColumn col="6">
      <FlowItem>
        <PieAndBarChart :managerArr="managerArr"
                        class="pie-bar-chart"></PieAndBarChart>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="6">
      <FlowItem>
        <el-table border
            class="inquiry-table" 
            :data="managerArr"
            :header-cell-style="headerCellStyle"
            :header-row-style="headerRowStyle"
            :row-style="rowStyle"
            :cell-style="cellStyle">
          <el-table-column
              prop="account"
              label="用户名">
          </el-table-column>
          <el-table-column
              prop="name"
              label="员工名">
          </el-table-column>
          <el-table-column
              prop="inquiryData"
              :formatter="getInquiryLength"
              label="问卷量">
          </el-table-column>
          <el-table-column label="详细"
                           type="expand">
            <template slot-scope="props">
              <ShowQuestionTable @publish="publish"
                                 @disPublish="disPublish"
                                 :inquiryData="props.row.inquiryData"
                                 :inquiryIndex="props.$index"
                                 role="super"></ShowQuestionTable>
            </template>
          </el-table-column>
        </el-table>
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
// 问卷总览表格组件
import ShowQuestionTable from '@/components/homeChild/question/questionShowChild/ShowQuestionTable'
// 饼型和条型图
import PieAndBarChart from '@/components/homeChild/persion/persionChild/PieAndBarChart'

export default {
  name: 'persion',
  data () {
    return {
      managerArr: []
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    FlowItem,
    ShowQuestionTable,
    PieAndBarChart
  },
  computed: {},
  methods: {
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
    },
    /**
     * 表头行样式回调函数结束
     */
    /**
     * 获取问卷数量
     */
    getInquiryLength (row, column, cellValue) {
      return cellValue.length
    },
    /**
     * 问卷发布
     */
    publish ({index, inquiryIndex}) {
      this.managerArr[inquiryIndex].inquiryData[index].switch = '1'
      // 触发刷新
      this.managerArr.splice(0, 0)
    },
    /**
     * 问卷不发布
     */
    disPublish ({index, inquiryIndex}) {
      this.managerArr[inquiryIndex].inquiryData[index].switch = '0'
      // 触发刷新
      this.managerArr.splice(0, 0)
    }
  },
  beforeMount () {
    this.$http.post('/home/super/getAllManager')
    .then(res => {
      this.managerArr = res.data.managerArr
    })
  }
}
</script>
<style scoped>
.pie-bar-chart {
  height: 500px;
}
</style>