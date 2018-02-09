<!-- ShowQuestionTable.vue
// 问卷总览表格组件
import ShowQuestionTable from '@/components/homeChild/question/questionShowChild/ShowQuestionTable'
 -->
<template>
  <FlowItem>
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
          <div v-if="role === 'manager'">
            <a :href="operateInquriyUrl(scope.$index, inquiryData)" class="icon-edit iconfont icon-link"></a>
            <i @click="deleteInquiry(scope.$index, inquiryData)" class="iconfont icon-delete icon-link"></i>
          </div>
          <div v-else>
            <i @click="publish(scope.$index, inquiryData)"
               v-if="scope.row.switch === '0'" 
               class="iconfont icon-iconfontplay2 icon-link"></i>
            <i @click="disPublish(scope.$index, inquiryData)"
               v-else
               class="iconfont icon-iconfontstop icon-link"></i>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </FlowItem>
</template>

<script>
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  props: ['inquiryData', 'role'],
  data () {
    return {
    }
  },
  components: {
    FlowItem,
    ButtonPack
  },
  computed: {},
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
     * 问卷发布事件
     */
    publish (index, inquiryData) {
      this.$http.post('/home/super/toggle', {
        inquiryId: inquiryData[index].id,
        inquriySwitch: '1'
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          inquiryData[index].switch = '1'
        } else {
          alert('发布未成功')
        }
      })
    },
    /**
     * 问卷取消发布事件
     */
    disPublish (index, inquiryData) {
      this.$http.post('/home/super/toggle', {
        inquiryId: inquiryData[index].id,
        inquriySwitch: '0'
      })
      .then(res => {
        let result = res.data
        if (result.statusObj.status === 1) {
          inquiryData[index].switch = '0'
        } else {
          alert('取消发布未成功')
        }
      })
    }
  }
}
</script>
<style scoped>
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
  cursor: pointer;
}
.icon-delete:hover {
  color: #FF0041;
  cursor: pointer;
}
.icon-iconfontplay2:hover {
  color: #00C1DE;
  cursor: pointer;
}
.icon-iconfontstop:hover {
  color: #FF0041;
  cursor: pointer;
}
.icon-link:last-child {
  margin-right: 0;
}
/* 表格中的编辑结束 */
</style>