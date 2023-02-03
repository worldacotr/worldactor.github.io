import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/MyHome.vue'
import Car from '@/views/Car/MyCar.vue'
import My from '@/views/My/MyPage.vue'
import Oder from '@/views/Oder/MyOder.vue'
import Store from '@/views/Store/MyStore.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  {
    path: '/car',
    component: Car,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/my',
    component: My,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/oder',
    component: Oder,
    meta: {
      title: '订单'
    }
  },
  {
    path: '/store',
    component: Store,
    meta: {
      title: '店铺'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
