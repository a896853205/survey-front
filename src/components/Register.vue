<!-- Register.vue -->
<template>
  <div id="register">
    <Head :listData="topList"></Head>
    <div class="register-body">
      <div class="content">
        <h1 class="register-title">欢迎注册工大调查</h1>
        <InputPack @getValue="getUser" type="text" placeholder="设置用户名" class="mar-bom-small"></InputPack>
        <InputPack @getValue="getPassWord" type="password" placeholder="设置你的登录密码" class="mar-bom-small"></InputPack>
        <InputPack @getValue="getRePassWord" type="password" placeholder="再次输入你的密码" class="mar-bom-small"></InputPack>
        <InputPack @getValue="getTel" type="text" placeholder="输入你的手机号码" class="mar-bom-small"></InputPack>
        <ButtonPack @hit="register">同意条款并注册</ButtonPack>
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
import Head from '@/components/head/Header'
// 底部组件
import Foot from '@/components/foot/Footer'
// 输入框组件
import InputPack from '@/components/form/InputPack'
// 按钮组件
import ButtonPack from '@/components/form/ButtonPack'
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
      },
      user: {
        account: '',
        password: '',
        repassword: '',
        tel: ''
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
  methods: {
    /**
     * @param {String} value 获取的值
     */
    getUser (value) {
      this.user.account = value
    },
    /**
     * @param {String} value 获取的值
     */
    getPassWord (value) {
      this.user.password = value
    },
    /**
     * @param {String} value 获取的值
     */
    getRePassWord (value) {
      this.user.repassword = value
    },
    /**
     * @param {String} value 获取的值
     */
    getTel (value) {
      this.user.tel = value
    },
    /**
     * 注册函数
     */
    register () {
      this.$http.post('/register', this.user)
      .then(res => {
        let result = res.data
        if (result.status === 0) {
          alert(result.errMessage)
        } else {
          // 显示登录成功-------------------------------
          location.href = '/#/login'
        }
      })
    }
  }
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
