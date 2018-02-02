<!-- AddEpilog.vue -->
<template>
  <div class="row">
    <AddEpilogForm></AddEpilogForm>
    <AddEpilogInfoShow></AddEpilogInfoShow>
  </div>
</template>

<script>
// addEpilogForm 左边增加表单
import AddEpilogForm from '@/components/homeChild/question/questionAddChild/addEpilogChild/AddEpilogForm'
// addEpilogInfoShow 右边问卷数据展示
import AddEpilogInfoShow from '@/components/homeChild/question/questionAddChild/addEpilogChild/AddEpilogInfoShow'

export default {
  name: 'addepilog',
  data () {
    return {
    }
  },
  components: {
    AddEpilogForm,
    AddEpilogInfoShow
  },
  computed: {},
  methods: {},
  beforeMount () {
    // 这里判断url中是否有id,如果有查询,如果没有跳到选择类别
    // 查询问卷信息,
    this.$store.dispatch('getInquiry', this.$route.params.inquiryId)
    this.$store.commit('goProcess', 3)
  }
}
</script>
<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}
</style>