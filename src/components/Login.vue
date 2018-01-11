<template>
  <div id="login">
    <div class="login-background">
      <Head type="login-head-list"></Head>
      <LoginBody class="login-body"></LoginBody>
    </div>
      <Foot></Foot>
  </div>
</template>

<script>
// 头组件
import Head from './head/Header'
// 登录组体(左文字,右登录框)
import LoginBody from './loginChild/LoginBody'
// 底部组件
import Foot from './foot/Footer'

export default {
  name: 'login',
  data () {
    return {
    }
  },
  components: {
    Head,
    LoginBody,
    Foot
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
#login {
  background: #373d41;
}
.login-background {
  background: url('../assets/login-background.jpg');
  background-size: cover;
}
.login-body {
  padding: 75px 0 120px;
  color: #fff;
}
</style>