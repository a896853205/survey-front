<!-- HomeConfigInfo.vue -->
<template>
  <div class="row">
    <HomeItem widType="1" class="add-title-form">
      <ItemHead>基本信息细则</ItemHead>
      <ItemBody>
        <ul class="describe-ul">
          <li>
            <strong>[账户]</strong>
            <span>注册时会绑定固定账户,禁止修改</span>
          </li>
          <li>
            <strong>[原密码]</strong>
            <span>输入原始密码(必填)</span>
          </li>
          <li>
            <strong>[新密码]</strong>
            <span>输入新密码(必填)</span>
          </li>
          <li>
            <strong>[重复新密码]</strong>
            <span>再次输入新密码(必填)</span>
          </li>
          <li>
            <strong>[姓名]</strong>
            <span>再次输入姓名(选填)</span>
          </li>
        </ul>
      </ItemBody>
    </HomeItem>
    <HomeItem widType="2">
      <ItemHead>修改用户信息</ItemHead>
      <ItemBody>
        <FormPack @success="updateMyInfo" :formData="formData"></FormPack>
      </ItemBody>
    </HomeItem>
  </div>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
// item单元头
import ItemHead from '@/components/homeChild/item/ItemHead'
// item单元体
import ItemBody from '@/components/homeChild/item/ItemBody'
// form组件
import FormPack from '@/components/form/FormPack'
export default {
  name: 'homeconfiginfo',
  data () {
    return {
      formData: [{
        title: '账户',
        type: 'input',
        isImport: false,
        placeholder: '',
        value: '',
        isDisable: true,
        name: 'inquiryType'
      }, {
        title: '原密码',
        type: 'password',
        isImport: true,
        placeholder: '输入原始密码',
        value: '',
        isDisable: false,
        name: 'oldPassword'
      }, {
        title: '新密码',
        type: 'password',
        isImport: true,
        placeholder: '输入新密码',
        value: '',
        isDisable: false,
        name: 'newPassword'
      }, {
        title: '重复新密码',
        type: 'password',
        isImport: true,
        placeholder: '再次输入新密码',
        value: '',
        isDisable: false,
        name: 'reNewPassword'
      }, {
        title: '姓名',
        type: 'input',
        isImport: false,
        placeholder: '输入你的姓名',
        value: '',
        isDisable: false,
        name: 'name'
      }, {
        title: '',
        type: 'button',
        isImport: false,
        placeholder: '',
        value: '确认',
        isDisable: false,
        name: ''
      }]
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    FormPack
  },
  computed: {
    getUserInfo () {
      this.formData[0].value = this.$store.state.User.account
      this.formData[4].value = this.$store.state.User.name
      return this.$store.state.User
    }
  },
  methods: {
    /**
     * 更新我的信息
     */
    updateMyInfo (formData) {
      this.$http.post(`/home${this.getUserInfo.urlBase}/updateMyInfo`,
        formData
      )
      .then(res => {
        // 提示修改成功--------------------------------
        if (res.data.statusObj.status === 1) {
          location.href = '/#/login'
        }
      })
      .catch(e => {
        alert('网络错误,请稍后再试')
        console.log(e)
      })
    }
  },
  watch: {
    getUserInfo () {}
  }
}
</script>
<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}

/* 左边描述开始 */
.add-title-form {
  align-self: flex-start
}
.describe-ul {
  font-size: 12px;
  color: #666;
}
.describe-ul li {
  height: 24px;
  line-height: 24px;
}
/* 左边描述结束 */
</style>