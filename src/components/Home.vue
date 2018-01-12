<template>
  <div>
    // home.vue
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {},
      // 为每次跳页进行token判断
      // 判断请求头之中是否有token
      // 如果没有去localStorage取
      // 如果localStorage没有就去login
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.$http.defaults.headers.common['Authorization']) {
        if (localStorage.getItem('token')) {
          vm.$http.defaults.headers.common['Authorization'] = localStorage.getItem('token')
        } else {
          next('/login')
        }
      }
    })
  }
}
</script>
<style scoped>
</style>