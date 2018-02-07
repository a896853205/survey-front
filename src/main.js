// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './axiosConfig'
import {Notification, Table, TableColumn, Select, Option} from 'element-ui'

// 使用通知组件
Vue.component(Notification.name, Notification)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.prototype.$notify = Notification

Vue.config.productionTip = false

// axios 全局配置
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
