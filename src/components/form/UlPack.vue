<!-- UlPack.vue
// Ul组件
import UlPack from '@/components/form/UlPack'
 -->
<template>
  <!-- 这里不能有回车,因为inline -->
  <ul :class="listClass"><li :key="item.name" v-for="item in linkList"><a :href="item.href">{{ item.name }}</a></li></ul>
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
a {
  transition: .2s;
}
ul > li {
  display: inline;
  cursor: pointer;
}
/* 基本配置结束 */
/* login页other样式开始 */
.login-other-list {
  float: right;
}
.login-other-list > li {
  margin-left: 16px;
}
.login-other-list > li > a:link,
.login-other-list > li > a:visited {
  color: #73777A;
}
.login-other-list > li > a:hover {
  color: #00C1DE;
}
/* login页other样式结束 */
/* login页脚base样式开始 */
.login-base-list > li {
  margin-right: 35px;
}
.login-base-list > li > a:link,
.login-base-list > li > a:visited {
  color: #9b9ea0;
}
.login-base-list > li > a:hover {
  color: #00C1DE;
}
/* login页脚base样式结束 */
/* login页脚other样式开始 */
.login-foot-other-list > li {
  margin-right: 20px;
  font-size: 14px;
  line-height: 30px;
}
.login-foot-other-list > li > a:link,
.login-foot-other-list > li > a:visited {
  color: #73777A;
}
.login-foot-other-list > li > a:hover {
  color: #00C1DE;
}
/* login页脚other样式结束 */
/* login页头部样式开始 */
.login-head-list > li > a {
  padding: 23px 20px;
  font-size: 14px;
  line-height: 14px;
  display: inline-block;
}
.login-head-list > li > a:link,
.login-head-list > li > a:visited {
  color: #fff;
}
.login-head-list > li > a:hover {
  color: #00C1DE;
}
/* login页头部样式结束 */
/* register页头部样式开始*/
.register-head-list > li > a {
  padding: 23px 20px;
  font-size: 14px;
  line-height: 14px;
  display: inline-block;
}
.register-head-list > li > a:link,
.register-head-list > li > a:visited {
  color: #373D41;
}
.register-head-list > li > a:hover {
  color: #00C1DE;
}
/* register页头部样式结束*/
/* home页头样式开始 */
.home-head-list > li > a {
  padding: 18px;
  border-left: 1px solid #2a2f32;
  line-height: 14px;
  font-size: 14px;
  display: inline-block;
}
.home-head-list > li > a:link,
.home-head-list > li > a:visited {
  background: #373d41;
  color: #fff;
}
.home-head-list > li > a:hover{
  background: #2a2f32;
}
/* home页头样式结束 */
</style>