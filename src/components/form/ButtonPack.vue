<!-- ButtonPack.vue
// button组件
import ButtonPack from '@/components/form/ButtonPack'
 -->
<template>
  <button type="button" class="button-pack">
    <slot>登录</slot>
  </button>
</template>

<script>
export default {
  name: 'buttonpack',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
  }
}
</script>
<style scoped>
.button-pack {
  width: 100%;
  height: 40px;
  border: 0;
  background-color: #00C1DE;
  box-shadow: 1px 1px 3px #ddd;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
}
.button-pack:hover {
  background-color: #00b7d3;
}
</style>