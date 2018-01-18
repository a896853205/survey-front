<!-- HomeQuestionAdd.vue -->
<template>
  <div class="home-question-add">
    <ProcessProgress :process="process"></ProcessProgress>
    <ProcessStatus :process="process"></ProcessStatus>
    <router-view></router-view>
  </div>
</template>

<script>
// 过程进度条组件
import ProcessProgress from './questionAddChild/ProcessProgress'
// 过程情况展示组件
import ProcessStatus from './questionAddChild/ProcessStatus'
// 选择类型组件
import SelectType from './questionAddChild/SelectType'
export default {
  name: 'homequestionadd',
  data () {
    return {
      process: {
        processStatus: 0,
        processData: ['选择类别', '添加名称', '添加题目', '确认发布'],
        processClass: ['icon-viewgallery', 'icon-signboard', 'icon-rfq', 'icon-scanning', 'icon-templatedefault']
      }
    }
  },
  components: {
    ProcessProgress,
    ProcessStatus,
    SelectType
  },
  computed: {},
  methods: {
    /**
     * 过程进入下一步骤
     */
    nextProcess () {
      this.process.processStatus += 1
    }
  }
}
</script>
<style scoped>
.home-question-add {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>