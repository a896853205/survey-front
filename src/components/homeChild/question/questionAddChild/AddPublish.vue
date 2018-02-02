<!-- AddPublish.vue -->
<template>
  <div class="row">
    <AddPublishInquiryDetailShow></AddPublishInquiryDetailShow>
    <AddPublishInquiryLink :inquiryId="$route.params.inquiryId"></AddPublishInquiryLink>
    <AddPublishInquiryButton></AddPublishInquiryButton>
  </div>
</template>

<script>
// addPublishInquiryLink 问卷链接组件
import AddPublishInquiryLink from '@/components/homeChild/question/questionAddChild/addPublishChild/AddPublishInquiryLink'
// addPublishInquiryDetailShow 问卷详细信息组件
import AddPublishInquiryDetailShow from '@/components/homeChild/question/questionAddChild/addPublishChild/AddPublishInquiryDetailShow'
// addPublishInquiryButton 问卷按钮组件
import AddPublishInquiryButton from '@/components/homeChild/question/questionAddChild/addPublishChild/AddPublishInquiryButton'
export default {
  name: 'addpublish',
  data () {
    return {
    }
  },
  components: {
    AddPublishInquiryLink,
    AddPublishInquiryDetailShow,
    AddPublishInquiryButton
  },
  computed: {},
  methods: {},
  beforeMount () {
    // 这里判断url中是否有id,如果有查询,如果没有跳到选择类别
    // 查询问卷信息,
    this.$store.commit('goProcess', 4)
    let inquiryId = this.$route.params.inquiryId
    this.$store.dispatch('getInquiry', inquiryId)
  }
}
</script>
<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>