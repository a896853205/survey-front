<!-- ProcessStatus.vue -->
<template>
  <HomeItem widType="1">
    <ItemHead>当前步骤</ItemHead>
    <div class="now-status">
      <i class="iconfont" :class="process.processClass[process.processStatus]"></i>
      <span v-text="process.processStatus < process.processData.length ? process.processData[process.processStatus] : '已完成'"></span>
    </div>
  </HomeItem>
</template>

<script>
// home单元组件
import HomeItem from '../../HomeItem'
// item单元头
import ItemHead from '../../item/ItemHead'
export default {
  name: 'processstatus',
  props: ['process'],
  data () {
    return {
    }
  },
  components: {
    HomeItem,
    ItemHead
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
.now-status {
  font-size: 14px;
  line-height: 60px;
  text-align: center;
}
</style>