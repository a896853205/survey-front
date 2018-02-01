<!-- HomeQuestionShow.vue -->
<template>
  <div class="flow-layout">
    <div class="flow-container flow-large">
      <div class="flow-item">
        <ItemHead>问卷展示</ItemHead>
        <ItemBody>
          <el-table :data="inquiryData">
            <el-table-column
              prop="title"
              label="问卷名">
            </el-table-column>
            <el-table-column
              :formatter="inquiryStatus"
              prop="state"
              label="问卷状态">
            </el-table-column>
            <el-table-column
              :formatter="inquirySwitch"
              prop="switch"
              label="是否开启">
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <a :href="operateInquriyUrl(scope.$index, inquiryData)" class="icon-edit iconfont icon-link"></a>
                <i @click="deleteInquiry(scope.$index, inquiryData)" class="iconfont icon-delete icon-link"></i>
              </template>
            </el-table-column>
          </el-table>
        </ItemBody>
      </div>
    </div>
    <div class="flow-container flow-small">
      <div class="flow-item">
        <ItemHead>问卷总数</ItemHead>
        <ItemBody></ItemBody>
      </div>
      <div class="flow-item">
        <ItemHead>问卷展示</ItemHead>
        <ItemBody></ItemBody>
      </div>
    </div>
  </div>
</template>

<script>
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
  computed: {},
  methods: {
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
    operateInquriyUrl (index, inquiryData) {
      return `${location.origin}/#/home/questionAdd/AddIssue/${inquiryData[index].id}`
    },
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
    }
  },
  beforeMount () {
    this.$http.post('/home/manager/selectAllQuestion')
    .then(res => {
      // 这里用statusObj判断,为1就放到inquiryData中
      if (res.data.statusObj.status === 1) {
        this.inquiryData = res.data.inquiryData
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
/* 表格中的编辑结束 */
</style>
