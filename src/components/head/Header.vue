<!-- Header.vue -->
<template>
  <div id="top" :class="type">
    <img class="web-logo" src="../../assets/white-logo.png" alt="LOGO">
    <UlPack class="head" :listClass="topList.style" :linkList="topList.data"></UlPack>
  </div>
</template>

<script>
// 列表组件
import UlPack from '../form/UlPack'
export default {
  props: ['type'],
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
        style: this.type
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
}
.web-logo {
  height: 35px;
  margin-top: 12.5px;
  margin-left: 30px;
}
.login-head-list {
  border-bottom: 1px solid rgba(255,255,255,0.3);
}
.register-head-list {
  border-bottom: 1px solid #D7D8D9;
}
.head {
  float: right;
}
</style>
