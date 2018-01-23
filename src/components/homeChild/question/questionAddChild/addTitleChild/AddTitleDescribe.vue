<!-- AddTitleDescribe.vue -->
<template>
  <HomeItem widType="1" class="add-title-form">
    <ItemHead>基本信息细则</ItemHead>
    <ItemBody>
      <ul class="describe-ul">
        <li>
          <strong>[问卷类型]</strong>
          <span>再次确认问卷类型</span>
        </li>
        <li>
          <strong>[问卷标题]</strong>
          <span>添加问卷标题(必填)</span>
        </li>
        <li>
          <strong>[问卷描述]</strong>
          <span>添加问卷描述(选填)</span>
        </li>
      </ul>
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
export default {
  name: 'addtitledescribe',
  data () {
    return {
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
.add-title-form {
  align-self: flex-start
}
.describe-ul {
  font-size: 12px;
  color: #666;
}
.describe-ul li {
  height: 24px;
  line-height: 24px;
}
</style>