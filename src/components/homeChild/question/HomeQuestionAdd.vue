<!-- HomeQuestionAdd.vue -->
<template>
  <div class="home-question-add">
    <ProcessProgress :process="process"></ProcessProgress>
    <ProcessStatus :process="process"></ProcessStatus>
    <router-view class="question-add-router-view"></router-view>
  </div>
</template>

<script>
// 过程进度条组件
import ProcessProgress from '@/components/homeChild/question/questionAddChild/ProcessProgress'
// 过程情况展示组件
import ProcessStatus from '@/components/homeChild/question/questionAddChild/ProcessStatus'
// 选择类型组件
import SelectType from '@/components/homeChild/question/questionAddChild/SelectType'
export default {
  name: 'homequestionadd',
  data () {
    return {
    }
  },
  components: {
    ProcessProgress,
    ProcessStatus,
    SelectType
  },
  computed: {
    process () {
      return this.$store.state.addQuestionProcess
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.home-question-add {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.question-add-router-view {
  width: 100%;
}
</style>