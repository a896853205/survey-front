<!-- ItemHead.vue
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
 -->
<template>
  <div class="item-head">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'itemhead',
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
.item-head {
  width: 100%; height: 45px;
  padding-left: 16px;
  background: #F5F5F6;
  line-height: 45px;
  border-bottom: 1px solid #F2F2F2;
  font-size: 14px;
  color: #666666;
  box-sizing: border-box;
}

</style>