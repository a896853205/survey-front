<!-- AddTitle.vue -->
<template>
  <div class="row">
    <AddTitleDescribe></AddTitleDescribe>
    <AddTitleForm></AddTitleForm>
  </div>
</template>
<script>
// 增加题目的表单
import AddTitleForm from '@/components/homeChild/question/questionAddChild/addTitleChild/AddTitleForm'
// 增加题目的表单
import AddTitleDescribe from '@/components/homeChild/question/questionAddChild/addTitleChild/AddTitleDescribe'
export default {
  name: 'addtitle',
  data () {
    return {
    }
  },
  components: {
    AddTitleForm,
    AddTitleDescribe
  },
  computed: {},
  methods: {},
  beforeMount () {
    this.$store.commit('goProcess', 1)
  }
}
</script>
<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}
</style>