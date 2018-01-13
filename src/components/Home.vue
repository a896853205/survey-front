<template>
  <div>
    <Head class="home-head" :listData="topList"></Head>
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
      },
      topList: {
        data: [{
          name: '中国站',
          href: ''
        }, {
          name: '首页',
          href: '/#/home/index'
        }],
        style: 'home-head-list'
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
          vm.$http.defaults.headers.common['Authorization'] = localStorage.getItem('token')         // 发送到后台解析token
          // 进行后台判断看token还是否合法
          vm.$http.post('/home/all/getToken').then(res => {
            let result = res.data
            if (result.statusObj.status === 1) {
              // 判断如果成功的话
              // 把返回的值存入VUEX
              vm.$store.commit('getUser', result.user)
            } else {
              // 如果不成功返回login页,而且把所有的token清空
              // 这里应该输出token超时--------------------------
              vm.$http.defaults.headers.common['Authorization'] = ''
              window.localStorage.clear()
              next('/login')
            }
          }).catch(() => {
            next('/login')
          })
        } else {
          next('/login')
        }
      }
    })
  },
  created () {
    // 区后台查询该权限的nav
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