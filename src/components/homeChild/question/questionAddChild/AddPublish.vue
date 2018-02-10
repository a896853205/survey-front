<!-- AddPublish.vue -->
<template>
  <div class="row">
    <HomeItem widType="2">
      <AddPublishInquiryDetailShow></AddPublishInquiryDetailShow>
    </HomeItem>
    <AddPublishInquiryLink :inquiryId="$route.params.inquiryId"></AddPublishInquiryLink>
    <AddPublishInquiryButton></AddPublishInquiryButton>
  </div>
</template>

<script>
// home单元组件
import HomeItem from '@/components/homeChild/HomeItem'
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
    HomeItem,
    AddPublishInquiryLink,
    AddPublishInquiryDetailShow,
    AddPublishInquiryButton
  },
  computed: {
    isPublish () {
      return this.$store.state.inquiryEdit.inquiryData.toggle
    }
  },
  methods: {},
  beforeMount () {
    // 这里判断url中是否有id,如果有查询,如果没有跳到选择类别
    this.$store.commit('goProcess', 4)
    let inquiryId = this.$route.params.inquiryId
    // 查询问卷信息
    this.$store.dispatch('getInquiry', inquiryId)
  },
  watch: {
    /**
     * 如果问卷发布就,
     */
    isPublish (newValue) {
      if (newValue === '1') {
        this.$store.commit('goProcess', 5)
      } else {
        this.$store.commit('goProcess', 4)
      }
    }
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