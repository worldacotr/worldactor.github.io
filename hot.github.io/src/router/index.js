import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '@/views/User/MyUser.vue'
import Home from '@/views/Home/MyHome.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/user', component: User }
]

const router = new VueRouter({
  routes
})

export default router
