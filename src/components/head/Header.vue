<!-- Header.vue
// Header组件
import Header from '@/components/head/Header'
 -->
<template>
  <div id="top" :class="listData.style">
    <img class="web-logo web-white-logo" src="../../assets/white-logo.png" alt="LOGO">
    <img class="web-logo web-black-logo" src="../../assets/black-logo.png" alt="LOGO">
    <UlPack class="head" :listClass="listData.style" :linkList="listData.data"></UlPack>
  </div>
</template>

<script>
// 列表组件
import UlPack from '@/components/form/UlPack'
export default {
  props: ['listData'],
  name: 'top',
  data () {
    return {
    }
  },
  components: {
    UlPack
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  float: right;
}
.web-logo {
  cursor: pointer;
  animation: rotation 20s infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  5% {
    transform: rotate(180deg);
  }
  95% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0);
  }
}
/* 登录头部样式开始 */
.login-head-list {
  height: 60px;
  border-bottom: 1px solid rgba(255,255,255,0.3);
}
.login-head-list .web-black-logo {
  display: none;
}
.login-head-list .web-logo {
  height: 35px;
  margin-top: 12.5px;
  margin-left: 30px;
}
/* 登录头部样式结束 */
/* 注册头部样式开始 */
.register-head-list {
  height: 60px;
  border-bottom: 1px solid #D7D8D9;
}
.register-head-list .web-white-logo {
  display: none;
}
.register-head-list .web-logo {
  height: 35px;
  margin-top: 12.5px;
  margin-left: 30px;
}
/* 注册头部样式结束 */
/* home页头部样式开始 */
.home-head-list {
  height: 50px;
}
.home-head-list .web-logo {
  height: 30px;
  margin: 10px 15px;
  /* border-right: 1px solid #2a2f32; */
}
.home-head-list .web-black-logo {
  display: none;
}
/* home页头部样式结束 */
</style>
