<!-- Sub-header.vue
// SubHeader组件
import SubHeader from '@/components/head/Sub-header'
-->
<template>
  <div id="subHeader">
    <img class="web-logo" src="../../assets/white-logo.png" alt="logo">
    <UlPack></UlPack>  
  </div>
</template>

<script>
// 列表组件
import UlPack from '@/components/form/UlPack'
export default {
  name: 'sub-header',
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
#subHeader {
  height: 40px;
  border-bottom: 1px solid hsla(0,0%,100%,.15);
  box-sizing: border-box;
}
.web-logo {
  height: 20px;
  margin-top: 10px;
}
</style>
