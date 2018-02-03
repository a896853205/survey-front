<!-- FlowContainer.vue
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
 -->
<template>
  <div class="flow-layout">
    <slot>
      // FlowContainer.vue
    </slot>
  </div>
</template>

<script>
export default {
  name: 'flowContainer',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
.flow-layout {
  display: flex;
  justify-content: space-between;
}
</style>