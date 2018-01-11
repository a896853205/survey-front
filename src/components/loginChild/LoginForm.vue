<!-- LoginForm.vue -->
<template>
  <div id="loginform">
    <div class="form-title">密码登录</div>
    <small class="form-describe">淘宝及1688会员可直接使用会员名登录</small>
    <InputPack @getValue="getUser" type="text" placeholder="邮箱/会员名/8位ID" class="mar-bom-small"></InputPack>
    <InputPack @getValue="getPassWord" type="password" placeholder="登录密码" class="mar-bom-small"></InputPack>
    <ButtonPack @hit="login">登录</ButtonPack>
    <div class="login-other">
      <UlPack :listClass="otherOpation.style" :linkList="otherOpation.data"></UlPack>
    </div>
    <div class="login-link">
      <span>其他方式登录:</span>
      <ul>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wechat"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qq"></use>
          </svg>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 输入框组件
import InputPack from '../form/InputPack'
// 按钮组件
import ButtonPack from '../form/ButtonPack'
// 列表组件
import UlPack from '../form/UlPack'
export default {
  name: 'loginform',
  data () {
    return {
      // 其他链接配置
      otherOpation: {
        data: [{
          name: '忘记密码',
          href: ''
        },
        {
          name: '忘记用户名',
          href: ''
        },
        {
          name: '免费注册',
          href: '/#/register'
        }],
        style: 'login-other-list'
      },
      user: {
        account: '',
        password: ''
      }
    }
  },
  components: {
    InputPack,
    ButtonPack,
    UlPack
  },
  computed: {},
  methods: {
    getUser (value) {
      this.user.account = value
    },
    getPassWord (value) {
      this.user.password = value
    },
    /**
     * 登录函数
     */
    login () {
      this.$http.post('users/login', this.user)
      .then((res) => {
        let result = res.data
        if (result.status === 1) {
          localStorage.setItem('token', result.token)
        } else {
          alert(result.errMessage)
        }
      })
      .catch((e) => {
        alert('网络错误,请稍后再试')
      })
    }
  }
}
</script>
<style scoped>
#loginform {
  width: 380px;
  margin-top: 20px;
  padding: 22px;
  background: #fff;
  color: #73777A;
  box-sizing: border-box;
}
/* 登录框标题开始 */
.form-title {
  margin-bottom: 18px;
  font-size: 18px;
  color: #373D41;
}
/* 登录框标题结束 */
/* 登录描述开始 */
.form-describe {
  padding-bottom: 15px;
  font-size: 14px;
  display: block;
}
/* 登录描述结束 */
/* 登录方式样式开始 */
.login-link {
  font-size: 12px;
  color: #373D41;
}
.login-link > ul {
  display: inline;
}
.login-link > ul > li {
  margin-left: 4px;
  font-size: 22px;
  display: inline;
  cursor: pointer;
} 
/* 登录方式样式结束 */
</style>
<style>
/* 其他选项开始 */
.login-other {
  margin-top: 12px;
  margin-bottom: 28px;
  font-size: 12px;
  overflow: hidden;
}
/* 其他选项结束 */
</style>