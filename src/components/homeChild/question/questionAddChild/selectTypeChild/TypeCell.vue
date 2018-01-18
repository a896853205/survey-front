<!-- TypeCell.vue -->
<template>
  <li class="type-cell">
    <div class="type-cell-left">
      <i class="iconfont" :class="typeData.iconClass"></i>
    </div>
    <div class="type-cell-right">
      <h5>{{ typeData.title }}</h5>
      <p>{{ typeData.describe }}</p>
      <button class="onsell-button"
              v-if="typeData.isSell" 
              type="button" 
              @click="changeUrl('/#/home/quesstionAdd/AddTitle')">
              立即创建
      </button>
      <button class="sell-out-button" v-else>尽情期待</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['typeData'],
  name: 'typecell',
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    /**
     * 发出下一步骤的请求
     */
    nextProcess () {
      this.$store.commit('nextProcess')
    },
    /**
     * 跳转页面
     */
    changeUrl (toUrl) {
      this.nextProcess()
      location.href = toUrl
    }
  }
}
</script>
<style scoped>
.type-cell {
  width: 32.5%;
  border: 1px solid #F5F5F6;
  display: flex;
  transition: .2s;
}
.type-cell:hover {
  box-shadow: 0 4px 5px #ddd;
}
.type-cell-left {
  width: 60px; height: 100%;
  background: #F5F5F6;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.type-cell-right {
  flex: 1;
  padding: 12px 20px;
}
.type-cell-right h5 {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
}
.type-cell-right p {
  font-size: 12px;
}
.type-cell-right button {
  height: 26px;
  padding: 0 16px;
  margin-top: 8px;
  background-color: #fff;
  line-height: 24px;
  font-size: 12px;
  transition: .2s;
}
.type-cell-right .onsell-button {
  border: 1px solid #00c1de;
  color: #00c1de;
  cursor: pointer;
}
.type-cell-right .onsell-button:hover {
  background-color: #00c1de;
  color: #fff;
}
.type-cell-right .sell-out-button {
  border: 1px solid #777;
  color: #777;
  cursor: not-allowed;
}
.iconfont {
  font-size: 35px;
  color: #ddd;
}
</style>