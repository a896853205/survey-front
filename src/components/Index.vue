<template>
  <div>
    // index.vue
    <Head></Head>
    <SubHead></SubHead>
    <Slide></Slide>
    <Feature></Feature>
  </div>
</template>

<script>
// 头主件
import Head from './head/Header'
// 副-头主件
import SubHead from './head/Sub-header'
// 幻灯片
import Slide from './indexChild/Slide'
// 特性组件
import Feature from './indexChild/Feature'

export default {
  name: 'index',
  components: {
    Head,
    SubHead,
    Slide,
    Feature
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
