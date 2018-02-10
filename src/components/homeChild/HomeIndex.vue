<!-- HomeIndex.vue
// 这个组件分权限
 -->
<template>
  <div class="home-index">
    <img src="" alt="" >
    <div class="back-img">
      <img src="../../homeIndexImg/01.png" alt="" class="head one-head">
      <img src="../../homeIndexImg/02.png" alt="" class="head two-head">
      <img src="../../homeIndexImg/03.png" alt="" class="head three-head">
      <img src="../../homeIndexImg/04.png" alt="" class="head four-head">
      <img src="../../homeIndexImg/05.png" alt="" class="head five-head">
      <img src="../../homeIndexImg/06.png" alt="" class="head six-head">
    </div>
  </div>
</template>

<script>
import HomeItem from '@/components/homeChild/HomeItem'
export default {
  name: 'homeindex',
  data () {
    return {
    }
  },
  components: {
    HomeItem
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
.home-index {
  height: calc(100% - 8px);
  overflow: hidden;
}
.back-img {
  height: 600px; width: 954.5px;
  background: url('../../homeIndexImg/back.png');
  background-size: cover;
  margin: 0 auto;
  border-radius: 500px;
  display: block;
  position: relative;
}
.one-head {
  height: 106px;
  top: 162.5px;
  left: 598px;
  animation: headBig-one 12s infinite;
}
.two-head {
  width: 135px;
  left: 203px;
  top: 271.5px;
  animation: headBig-two 12s infinite;
}
.three-head {
  width: 103.5px;
  left: 244px;
  top: 143.5px;
  animation: headBig-three 12s infinite;
}
.four-head {
  height: 87px;
  left: 374.5px;
  top: 83.5px;
  animation: headBig-four 12s infinite;
}
.five-head {
  width: 61.5px;
  left: 495.5px;
  top: 89.5px;
  animation: headBig-five 12s infinite;
}
.six-head {
  width: 94.5px;
  left: 603px;
  top: 298px;
  animation: headBig-six 12s infinite;
}
@keyframes headBig-one {
  0% { transform: scale(1, 1) }
  5% { transform: scale(1.2, 1.2) }
  10% { transform: scale(1, 1) }
}
@keyframes headBig-two {
  10% { transform: scale(1, 1) }
  15% { transform: scale(1.2, 1.2) }
  20% { transform: scale(1, 1) }
}
@keyframes headBig-three {
  30% { transform: scale(1, 1) }
  35% { transform: scale(1.2, 1.2) }
  40% { transform: scale(1, 1) }
}
@keyframes headBig-four {
  50% { transform: scale(1, 1) }
  55% { transform: scale(1.2, 1.2) }
  60% { transform: scale(1, 1) }
}
@keyframes headBig-five {
  20% { transform: scale(1, 1) }
  25% { transform: scale(1.2, 1.2) }
  30% { transform: scale(1, 1) }
}
@keyframes headBig-six {
  40% { transform: scale(1, 1) }
  45% { transform: scale(1.2, 1.2) }
  50% { transform: scale(1, 1) }
}
.head {
  position: absolute;
}
</style>