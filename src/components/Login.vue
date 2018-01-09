<template>
  <div>
    <div class="login-background">
      <Head></Head>
      <LoginBody class="login-body"></LoginBody>
    </div>
    
  </div>
</template>

<script>
// 头主件
import Head from './head/Header'
// 登录主体(左文字,右登录框)
import LoginBody from './loginChild/LoginBody'

export default {
  name: 'login',
  data () {
    return {
    }
  },
  components: {
    Head,
    LoginBody
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
.login-background {
  background: url('../assets/login-background.jpg');
  background-size: cover;
}
.login-body {
  padding: 75px 0 120px;
  color: #fff;
}
</style>