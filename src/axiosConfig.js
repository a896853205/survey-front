import axios from 'axios'

import store from './store'
// 设置基本路径
axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.baseURL = 'http://192.168.1.4:3000'

axios.interceptors.request.use(config => {
  // 开始等待
  store.commit('startLoad')
  return config
}, () => {
  store.commit('startLoad')
  location.href = '/#/login'
})
axios.interceptors.response.use(response => {
  store.commit('stopLoad')
  // 判断状态是否正确
  if (response.data.statusObj.status === 1) {
    return response
  } else {
    // 清空token
    axios.defaults.headers.common['Authorization'] = ''
    window.localStorage.clear()
    // 错误时返回登录页
    location.href = '/#/login'
    // 输出错误信息
    store.commit('alert', {
      title: '错误',
      content: response.data.statusObj.errMessage
    })
    return response
  }
}, error => {
  store.commit('stopLoad')
  location.href = '/#/login'
  store.commit('alert', {
    title: '错误'
  })
  return Promise.reject(error)
})

export default axios
