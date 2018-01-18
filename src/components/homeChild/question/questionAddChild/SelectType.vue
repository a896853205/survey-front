<!-- SelectType.vue -->
<template>
  <HomeItem widType="3">
    <ItemHead>选择类别</ItemHead>
    <ItemBody class="select-type">
      <img class="select-type-img" src="../../../../assets/addQuestionType.jpg" alt="">
      <div class="select-type-div">
        <ul class="row" :key="index" v-for="(ulItem, index) in typeArr">
          <TypeCell :key="index" v-for="(liItem, index) in ulItem" :typeData="liItem"></TypeCell>
        </ul>
      </div>
    </ItemBody>
  </HomeItem>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
// type个别组件
import TypeCell from '@/components/homeChild/question/questionAddChild/selectTypeChild/TypeCell'
export default {
  name: 'selecttype',
  data () {
    return {
      typeArr: [
        [{
          title: '问卷调查',
          describe: '[最新问卷] 丰富题型, 强大逻辑, 问卷密码, 红包抽奖',
          isSell: true,
          iconClass: 'icon-wangluo'
        }, {
          title: '在线考试',
          describe: '[严格把控] 题库抽题, 限时作答, 成绩查询, 自动阅卷',
          isSell: false,
          iconClass: 'icon-yunyingguanli'
        }, {
          title: '在线投票',
          describe: '[精确分析] 图文视频, 选项随机, 实时排行, 微信投票',
          isSell: false,
          iconClass: 'icon-jiankong'
        }],
        [{
          title: '报名表单',
          describe: '[数据安全] 信息登记, 微信签到, 活动报名, 意见反馈',
          isSell: false,
          iconClass: 'icon-dashuju'
        }, {
          title: '360度评估',
          describe: '[评估全面] 批量评估, 权重维度, 便捷发放, 个人报告',
          isSell: false,
          iconClass: 'icon-shuju'
        }, {
          title: '在线测评',
          describe: '[多人共享] 支持多级测评维度, 自动呈现测评报告',
          isSell: false,
          iconClass: 'icon-GOC'
        }]
      ]
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    TypeCell
  },
  computed: {},
  methods: {
  },
  beforeMount () {
    this.$store.commit('initProcess')
  }
}
</script>
<style scoped>
.select-type {
  display: flex;
}
.select-type-img {
  height: 170px;
  flex-shrink: 0;
}
.select-type-div {
  padding-left: 16px;
  flex: 1;
}
.row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
.row:last-child {
  margin: 0;
}
</style>