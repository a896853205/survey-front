<!-- FlowColumn.vue
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
 -->
<template>
  <div class="flow-container" :class="getWidth">
    <slot>
      // FlowColumn.vue
    </slot>
  </div>
</template>

<script>
export default {
  props: ['col'],
  name: 'flowColumn',
  data () {
    return {
    }
  },
  components: {},
  computed: {
    /**
     * 获取类名
     */
    getWidth () {
      switch (this.col) {
        case '8': return 'col-md-8'
        case '6': return 'col-md-6'
        case '4': return 'col-md-4'
        default: break
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.flow-container {
  display: flex;
  flex-direction: column;
}
.col-md-8 {
  width: 66.25%;
}
.col-md-6 {
  width: 49.375%;
}
.col-md-4 {
  width: 32.5%;
}
</style>