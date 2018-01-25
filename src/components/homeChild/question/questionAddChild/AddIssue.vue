<!-- AddIssue.vue -->
<template>
  <div class="row">
    <AddIssueForm></AddIssueForm>
  </div>
</template>

<script>
// 问卷编辑组件
import AddIssueForm from '@/components/homeChild/question/questionAddChild/addIssueChild/AddIssueForm'
export default {
  name: 'addissue',
  data () {
    return {
    }
  },
  components: {
    AddIssueForm
  },
  computed: {},
  methods: {},
  beforeMount () {
    // 这里判断url中是否有id,如果有查询,如果没有跳到选择类别
    this.$store.commit('goProcess', 2)
    // 去vuex后台查询数据,然后放到vuex,这里加computed属性中---------
    this.$store.dispatch('getInquiry', this.$route.params.questionId)
  }
}
</script>
<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}
</style>