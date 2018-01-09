<template>
  <div>
    // index.vue
    <IndexHead></IndexHead>
    <SubHead></SubHead>
    <Slide></Slide>
    <Feature></Feature>
  </div>
</template>

<script>
// 头主件
import IndexHead from './indexChild/IndexHeader'
// 副-头主件
import SubHead from './head/Sub-header'
// 幻灯片
import Slide from './indexChild/Slide'
// 特性组件
import Feature from './indexChild/Feature'

export default {
  name: 'index',
  components: {
    IndexHead,
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
