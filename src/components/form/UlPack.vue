<!-- UlPack.vue -->
<template>
  <!-- 这里不能有回车,因为inline -->
  <ul><li v-for="item in linkList"><a :href="item.href">{{ item.name }}</a></li></ul>
</template>

<script>
export default {
  name: 'ulpack',
  props: [
    'linkList'
  ],
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
ul {
  display: inline;
}
ul > li {
  margin-left: 16px;
  display: inline;
  cursor: pointer;
}
</style>