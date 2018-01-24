<!-- IssueEditMenu.vue -->
<template>
  <div class="edit-menu">
    <span @click="editQuestion(questionIndex)" class="iconfont icon-edit edit-icon"></span>
    <span @click="deleteQuestion(questionIndex)" class="iconfont icon-delete edit-icon"></span>
  </div>
</template>

<script>
export default {
  props: ['questionIndex'],
  name: 'issueeditmenu',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    /**
     * 开启编辑问题
     * @param {number} questionIndex 开始编辑的题目系数
     */
    editQuestion (questionIndex) {
      this.$store.commit('editQuestion', questionIndex)
    },
    /**
     * 删除的当前问题
     * @param {number} questionIndex 问卷的系数
     */
    deleteQuestion (questionIndex) {
      this.$store.commit('deleteQuestion', questionIndex)
    }
  }
}
</script>
<style scoped>
.issue-item:hover .edit-menu {
  opacity: 1;
}
.edit-menu {
  width: 30px; height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  right: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .1s;
  z-index: 1;
}
.edit-menu .edit-icon {
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>