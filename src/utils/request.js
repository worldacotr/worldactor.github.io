import axios from 'axios'
// import store from '@/store/index'
const request = axios.create({
  baseURL: 'http://192.168.124.8'
})
// request.interceptors.request.use(config => {
//   // 拦截业务逻辑
//   // 进行请求配置的修改
//   // 如果本地又token就在头部携带
//   // 1. 获取用户信息对象
//   const { profile } = store.state.user
//   // 2. 判断是否有token
//   if (profile.token) {
//     // 3. 设置token
//     config.headers.Authorization = `Bearer ${profile.token}`
//   }
//   return config
// }, err => {
//   return Promise.reject(err)
// })
export default request
