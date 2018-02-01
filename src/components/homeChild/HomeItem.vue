<!-- HomeItem.vue -->
<template>
  <div class="home-item" :class="widClassType">
    <slot>//HomeItem.vue</slot>
  </div>
</template>

<script>
export default {
  props: ['widType'],
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    /**
     * 把数字转换成对应的类
     */
    widClassType () {
      switch (this.widType) {
        case '1': return 'home-item-one'
        case '2': return 'home-item-two'
        case '3': return 'home-item-three'
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.home-item {
  margin: 8px 0;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,0.15);
  color: #333;
}
/* 1/3块 */
.home-item-one {
  /* 剩下的0.5%为剩下的缝隙 */
  width: 32.5%;
}
/* 2/3块 */
.home-item-two {
  width: 66.25%;
}
/* 3/3块 */
.home-item-three {
  width: 100%;
}
</style>