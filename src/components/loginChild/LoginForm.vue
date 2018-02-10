<!-- LoginForm.vue -->
<template>
  <div id="loginform">
    <div class="form-title">密码登录</div>
    <small class="form-describe">淘宝及1688会员可直接使用会员名登录</small>
    <InputPack @getValue="getUser" type="text" placeholder="邮箱/会员名/8位ID" class="mar-bom-small"></InputPack>
    <InputPack @getValue="getPassWord" type="password" placeholder="登录密码" class="mar-bom-small"></InputPack>
    <ButtonPack @click.native="login">登录</ButtonPack>
    <div class="login-other">
      <UlPack :listClass="otherOpation.style" :linkList="otherOpation.data"></UlPack>
    </div>
    <div class="login-link">
      <span>其他方式登录:</span>
      <ul>
        <li>
          <i class="iconfont icon-wechat"></i>
        </li>
        <li>
          <i class="iconfont icon-weibo"></i>
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
        </li>
        <li>
          <i class="iconfont icon-github"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// input组件
import InputPack from '@/components/form/InputPack'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
// 列表组件
import UlPack from '@/components//form/UlPack'
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
      this.$http.post('/login', this.user)
      .then(res => {
        let result = res.data
        localStorage.setItem('token', result.token)
        this.$http.defaults.headers.common['Authorization'] = result.token
        // 塞到store里
        this.$store.commit('getUser', result.user)
        // 发出跳页申请
        location.href = '#/home/index'
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
/* 其他选项开始 */
.login-other {
  margin-top: 12px;
  margin-bottom: 28px;
  font-size: 12px;
  overflow: hidden;
}
/* 其他选项结束 */
/* 图标样式开始 */
.icon-wechat {
  color: #51C332;
}
.icon-weibo {
  color: #D32024;
}
.icon-qq {
  color: #4CAFE9;
}
.icon-github {
  color: #46B980;
}
/* 图标样式结束 */
</style>
