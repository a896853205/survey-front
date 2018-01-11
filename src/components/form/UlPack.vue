<!-- UlPack.vue -->
<template>
  <!-- 这里不能有回车,因为inline -->
  <ul :class="listClass"><li v-for="item in linkList"><a :href="item.href">{{ item.name }}</a></li></ul>
</template>

<script>
export default {
  name: 'ulpack',
  props: [
    'linkList',
    'listClass'
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
/* 基本配置开始 */
ul > li {
  margin-left: 16px;
  display: inline;
  cursor: pointer;
}
/* 基本配置结束 */
/* login页other样式开始 */
.login-other-list {
  float: right;
}
.login-other-list > li > a:link {
  color: #73777A;
}
.login-other-list > li > a:visited {
  color: #73777A;
}
.login-other-list > li > a:hover {
  color: #00C1DE;
}
/* login页other样式结束 */
</style>