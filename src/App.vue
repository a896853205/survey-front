<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* 基本配置 */
* {
  margin: 0;
  padding: 0;
}
ul, ol {
  list-style: none;
}
a {
  text-decoration: none;
}
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
