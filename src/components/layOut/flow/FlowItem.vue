<!-- FlowItem.vue
// flow布局每块
import FlowItem from '@/components/layOut/flow/FlowItem'
 -->
<template>
  <div class="flow-item">
    <slot>
      // FlowItem.vue
    </slot>
  </div>
</template>

<script>
export default {
  name: 'flowItem',
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
.flow-item {
  width: 100%;
  margin: 8px 0;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
}
</style>