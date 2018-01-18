import Vuex from 'vuex'
import Vue from 'vue'
// 用户模块
import User from './modules/user'
// 增加问卷进度模块
import addQuestionProcess from './modules/addQuestionProcess'
// 使用Vuex
Vue.use(Vuex)

// vuex配置
let store = new Vuex.Store({
  modules: {
    // 用户模块
    User,
    addQuestionProcess
  }
})

export default store
