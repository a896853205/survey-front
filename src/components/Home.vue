<template>
  <div>
    <Head class="home-head" :listData="topList"></Head>
    <div class="home-nav" 
         :style="{'width':navShow.style.width}">
      <Nav @change="changeWidth"></Nav>
    </div>
    <div class="home-show" 
         :style="{'left':homeShow.style.left,'width':homeShow.style.width}">
      <router-view/>
    </div>
  </div>
</template>

<script>
// 导航栏组件
import Nav from '@/components/homeChild/Nav'
// 头部组件
import Head from '@/components/head/Header'
const NavBigwidth = '180px'
const NavSmallwidth = '50px'
export default {
  name: 'home',
  data () {
    return {
      isunfold: true,
      homeShow: {
        style: {
          left: NavBigwidth,
          width: this.getShowWidth(NavBigwidth)
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
     * 根据导航栏的宽度获取展示块的宽度
     * @param {String} navWidth 导航栏宽度
     * @returns {String} 展示块宽度
     */
    getShowWidth (navWidth) {
      return 'calc(100% - ' + navWidth + ')'
    },
    /**
     * 改变Nav宽度
     */
    changeWidth () {
      this.isunfold = !this.isunfold
      if (this.isunfold) {
        // 如果展开的时候
        this.homeShow.style.left = NavBigwidth
        this.homeShow.style.width = this.getShowWidth(NavBigwidth)
        this.navShow.style.width = NavBigwidth
      } else {
        // 如果缩紧的时候
        this.homeShow.style.left = NavSmallwidth
        this.homeShow.style.width = this.getShowWidth(NavSmallwidth)
        this.navShow.style.width = NavSmallwidth
      }
    },
    /**
     * 判断当前浏览器中是否存在token
     * @param {Object} vm vue实例指的是home
     */
    judgeToken (vm) {
      if (!vm.$http.defaults.headers.common['Authorization']) {
        if (localStorage.getItem('token')) {
          vm.$http.defaults.headers.common['Authorization'] = localStorage.getItem('token')         // 发送到后台解析token
          // 进行后台判断看token还是否合法
          vm.$http.post('/home/all/getToken')
          .then(res => {
            let result = res.data
            // 判断如果成功的话
            // 把返回的值存入VUEX
            vm.$store.commit('getUser', result.user)
          })
        } else {
          location.href = '/#/login'
        }
      }
    }
  },
  /**
   * @param {Object} to 之前的router
   * @param {Object} from 之后的router
   * @param {Function} next 调用即可去到指定router
   */
  beforeRouteEnter (to, from, next) {
    // 为每次跳页进行token判断
    // 判断请求头之中是否有token
    // 如果没有去localStorage取
    // 如果localStorage没有就去login
    next(vm => {
      vm.judgeToken(vm)
    })
  },
  /**
   * mount之前
   */
  beforeMount () {
    this.judgeToken(this)
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
  height: calc(100% - 50px);
  padding: 8px 1% 0;
  background: #eaedf1;
  position: absolute;
  transition: .2s;
  left: 0;
  overflow: auto;
}
</style>
