<!-- 
load.vue
使用说明:
开始等待
this.$store.commit('startLoad')
停止等待
this.$store.commit('stopLoad')
 -->
<template>
  <div class="loading-container" :class="{ unLoad : !loadStatus}">
    <i class="iconfont icon-aislogo"></i>
  </div>
</template>

<script>
export default {
  name: 'load',
  data () {
    return {
    }
  },
  components: {},
  computed: {
    loadStatus () {
      return this.$store.state.Loading.isLoad
    }
  },
  methods: {}
}
</script>
<style scoped>
div.unLoad {
  z-index: -2;
  opacity: 0;
  transition: opacity .2s, z-index .2s .2s;
}
.loading-container {
  width: 100%; height: 100%;
  position: absolute;
  top: 0;
  background: rgba(250, 250, 250, .8);
  z-index: 999;
  opacity: 1;
  transition: opacity .2s .2s, z-index .2s;
}
.iconfont {
  display: block;
  width: 100px; height: 100px;
  color: #333;
  font-size: 100px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  animation: rotation 4s infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0);
    color: #333;
  }
  50% {
    transform: rotate(90deg);
    color: #666;
  }
  100% {
    transform: rotate(0);
    color: #333;
  }
}
</style>