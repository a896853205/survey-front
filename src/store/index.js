import Vuex from 'vuex'
import Vue from 'vue'
// 用户模块
import User from './modules/user'
// 增加问卷进度模块
import addQuestionProcess from './modules/addQuestionProcess'
// 编辑问卷变量储存
import inquiryEdit from './modules/inquiryEdit'
// 等待模块
import Loading from './modules/loading'
// 提示模块
import Notification from './modules/notification'
// 使用Vuex
Vue.use(Vuex)

// vuex配置
let store = new Vuex.Store({
  modules: {
    // 用户模块
    User,
    addQuestionProcess,
    inquiryEdit,
    Loading,
    Notification
  }
})

export default store
