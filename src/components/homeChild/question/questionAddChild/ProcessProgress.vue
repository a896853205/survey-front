<!-- ProcessProgress.vue -->
<template>
  <HomeItem widType="2">
    <ItemHead>创建过程</ItemHead>
    <div class="process-item">
      <span class="active-background" :style="{'width': process.processStatus * (100 / process.processData.length) + '%'}"></span>
      <span :key="index" v-for="(item, index) in process.processData" class="process-span" :class="{'active-span': process.processStatus >= index + 1}">
        <i class="iconfont icon-assessedbadge" :style="{'font-size': process.processStatus >= index + 1 ? '14px' : '0'}"></i>
        {{index + 1 + '.' + item}}
      </span>
    </div>
  </HomeItem>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
export default {
  name: 'processprogress',
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
.process-item {
  display: flex;
  position: relative;
  color: transparent;
  z-index: 1;
  background: #fff;
}
.process-span {
  height: 60px;
  border-right: 4px dotted #ddd;
  line-height: 60px;
  text-align: center;
  flex: 1;
  color: #333;
  font-size: 14px;
  transition: .5s;
  z-index: 3;
}
.process-span:last-child {
  border-right: 0;
}
.active-span {
  /* 当前过程 */
  color: #fff;
  border-right: 4px dotted #fff;
}
.active-background {
  height: 60px;
  background: #00C1DE;
  position: absolute;
  left: 0;
  transition: .5s;
  z-index: 2;
}
.icon-assessedbadge {
  color: #fff;
  font-size: 0;
  transition: .2s;
}
</style>