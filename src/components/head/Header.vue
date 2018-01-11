<!-- Header.vue -->
<template>
  <div id="top">
    <UlPack class="login-head" :listClass="topList.style" :linkList="topList.data"></UlPack>
  </div>
</template>

<script>
// 列表组件
import UlPack from '../form/UlPack'
export default {
  name: 'top',
  data () {
    return {
      topList: {
        data: [{
          name: '中国站',
          href: ''
        }, {
          name: '首页',
          href: ''
        }],
        style: 'login-head-list'
      }
    }
  },
  components: {
    UlPack
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top {
  height: 60px;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}
.login-head {
  float: right;
}
</style>
