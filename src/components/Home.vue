<template>
  <div>
    <Head class="home-head" type="home-head-list"></Head>
    <div class="home-nav" 
         :style="{'width':navShow.style.width}">
      <Nav @change="changeWidth"></Nav>
    </div>
    <div class="home-show" 
         :style="{'left':homeShow.style.left}">
      <router-view/>
    </div>
  </div>
</template>

<script>
// 导航栏组件
import Nav from './homeChild/Nav'
// 头部组件
import Head from './head/Header'
const NavBigwidth = '180px'
const NavSmallwidth = '50px'
export default {
  name: 'home',
  data () {
    return {
      isunfold: true,
      homeShow: {
        style: {
          left: NavBigwidth
        }
      },
      navShow: {
        style: {
          width: NavBigwidth
        }
      }
    }
  },
  components: {
    Nav,
    Head
  },
  computed: {},
  methods: {
    /**
     * 改变Nav宽度
     */
    changeWidth () {
      this.isunfold = !this.isunfold
      if (this.isunfold) {
        // 如果展开的时候
        this.homeShow.style.left = NavBigwidth
        this.navShow.style.width = NavBigwidth
      } else {
        // 如果缩紧的时候
        this.homeShow.style.left = NavSmallwidth
        this.navShow.style.width = NavSmallwidth
      }
    }
  },
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
.home-head {
  background: #373d41;
}
.home-nav {
  height: 100%;
  position: fixed;
  left: 0;
  transition: .2s;
}
.home-show {
  position: absolute;
  transition: .2s;
  left: 0;
}
</style>