<template>
  <div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="bill-o" to="/oder">订单</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/car">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const active = ref(0)
    return { active }
  }
}
</script>

<style>
</style>
