<!-- LoginBody.vue -->
<template>
  <div id="loginBody">
    <div class="login-inform-box">
      <h1 class="box-title">选择工大调查问卷</h1>
      <ul class="box-list">
        <li>空间无限量,高性能,导出所需文件</li>
        <li>给予用户邮箱反馈,更加亲和</li>
        <li>可视化分析界面,所需数据触手可得</li>
      </ul>
    </div>
    <LoginForm class="login-form"></LoginForm>
  </div>
</template>

<script>
// 登录表单
import LoginForm from '@/components/loginChild/LoginForm'

export default {
  data () {
    return {
    }
  },
  components: {
    LoginForm
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
#loginBody {
  width: 990px;
  margin:0 auto;
  overflow: hidden;
}
/* 左边展示信息开始 */
.login-inform-box {
  float: left;
  margin-top: 90px;
}
.box-title {
  margin-bottom: 19px;
}
.box-list {
  font-size: 14px;
  line-height: 30px;
}
/* 左边展示信息结束 */
.login-form {
  float: right;
}
</style>