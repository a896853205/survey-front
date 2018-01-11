<!-- Register.vue -->
<template>
  <div id="register">
    <Head type="register-head-list"></Head>
    <div class="register-body">
      <div class="content">
        <h1 class="register-title">欢迎注册工大调查</h1>
        <InputPack type="text" placeholder="设置用户名" class="mar-bom-small"></InputPack>
        <InputPack type="password" placeholder="设置你的登录密码" class="mar-bom-small"></InputPack>
        <InputPack type="password" placeholder="再次输入你的密码" class="mar-bom-small"></InputPack>
        <InputPack type="text" placeholder="输入你的手机号码" class="mar-bom-small"></InputPack>
        <ButtonPack>同意条款并注册</ButtonPack>
      </div>
      <div class="tips">
        <span>
          已有工大调查账号?
          <a href="#/login">快捷登录&gt;</a>
        </span>
      </div>
    </div>
    <Foot type="register-foot"></Foot>
  </div>
</template>

<script>
// 头组件
import Head from './head/Header'
// 底部组件
import Foot from './foot/Footer'
// 输入框组件
import InputPack from './form/InputPack'
// 按钮组件
import ButtonPack from './form/ButtonPack'
export default {
  name: 'register',
  data () {
    return {
      topList: {
        data: [{
          name: '中国站',
          href: ''
        }, {
          name: '首页',
          href: ''
        }],
        style: 'register-head-list'
      }
    }
  },
  components: {
    Head,
    Foot,
    InputPack,
    ButtonPack
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
#register {
  background: rgb(245, 245, 246);
}
.register-body {
  width: 1000px;
  margin: 80px auto;
  background: #fff;
  position: relative;
}
.register-title {
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 400;
  color: #373d41;
  text-align: center;
}
.content {
  width: 320px;
  margin: 0 auto;
  padding: 40px 0;
}
.tips {
  top: 50px;;
  right: 50px;
  font-size: 12px;
  color: rgb(115, 119, 122);
  position: absolute;
}
.tips a {
  color: #00c1de;
}
.tips a:link {
  color: #00c1de;
}
.tips a:visited {
  color: #00c1de;
}
.tips a:hover {
  color: #00c1de;
}
</style>
