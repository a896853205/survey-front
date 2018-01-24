<!-- AddIssueForm.vue -->
<template>
  <HomeItem widType="2">
    <ItemHead>问卷编辑区</ItemHead>
    <ItemBody>
      <h2 class="issue-title">测试问卷1</h2>
      <p class="issue-describe">问卷描述</p>
      <IssueEdit></IssueEdit>   
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
// 问卷编辑设置组件
import IssueEdit from '@/components/homeChild/question/questionAddChild/addIssueChild/issueFormChild/IssueEdit'

export default {
  name: 'addissueform',
  data () {
    return {}
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    IssueEdit
  },
  computed: {
  },
  methods: {}
}
</script>
<style scoped>
/* 问卷头开始 */
.issue-title {
  margin-bottom: 10px;
  text-align: center;
  color: #28B5D6;
  font-weight: 400;
}
.issue-describe {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}
/* 问卷头结束 */
</style>