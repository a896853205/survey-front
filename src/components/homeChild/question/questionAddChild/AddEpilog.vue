<!-- AddEpilog.vue -->
<template>
  <div>
    // AddEpilog.vue
  </div>
</template>

<script>
export default {
  name: 'addepilog',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {},
  beforeMount () {
    // 这里判断url中是否有id,如果有查询,如果没有跳到选择类别
    this.$store.commit('goProcess', 3)
  }
}
</script>
<style scoped>
</style>