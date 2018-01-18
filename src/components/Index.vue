<!-- Index.vue -->
<template>
  <div>
    // index.vue
    <div>
      <SubHead></SubHead>
      <IndexHead></IndexHead>
      <Slide></Slide>
    </div>
    <Feature></Feature>
  </div>
</template>

<script>
// 头主件
import IndexHead from '@/components/indexChild/IndexHeader'
// 副-头主件
import SubHead from '@/components/head/Sub-header'
// 幻灯片
import Slide from '@/components/indexChild/Slide'
// 特性组件
import Feature from '@/components/indexChild/Feature'

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
