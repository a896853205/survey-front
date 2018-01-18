<!-- AddTitleForm.vue -->
<template>
  <HomeItem widType="2">
    <ItemHead>添加基本信息</ItemHead>
    <ItemBody>
      <FormPack :formData="formData"></FormPack>
    </ItemBody>
  </HomeItem>
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
  name: 'addtitleform',
  data () {
    return {
      formData: [{
        title: '问卷类型',
        type: 'input',
        isImport: false,
        placeholder: '',
        value: '问卷调查',
        isDisable: true
      }, {
        title: '问卷标题',
        type: 'input',
        isImport: true,
        placeholder: '添加问卷标题',
        value: '',
        isDisable: false
      }, {
        title: '问卷描述',
        type: 'input',
        isImport: false,
        placeholder: '添加问卷描述',
        value: '',
        isDisable: false
      }, {
        title: '',
        type: 'button',
        isImport: false,
        placeholder: '',
        value: '确认',
        isDisable: false
      }]
    }
  },
  components: {
    HomeItem,
    ItemHead,
    ItemBody,
    FormPack
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>