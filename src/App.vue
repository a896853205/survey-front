<template>
  <div id="app">
    <router-view/>
    <Loading></Loading>
    <Notification></Notification>
  </div>
</template>

<script>
// 等待组件
import Loading from '@/components/util/load'
// home单元组件
import Notification from '@/components/util/Notification'
export default {
  name: 'app',
  components: {
    Loading,
    Notification
  }
}
</script>

<style>
/* 基本配置开始 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul, ol {
  list-style: none;
}
a {
  text-decoration: none;
}
/* 基本配置结束 */
/* 工具类 */
.hidden {
  display: none;
}
.mar-bom-small{
  margin-bottom: 20px;
}
/* 阿里图标基本配置 */
.icon {
  width: 1em; 
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
