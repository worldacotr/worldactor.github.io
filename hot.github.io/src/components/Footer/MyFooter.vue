<template>
  <dir>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" to="/">标签</van-tabbar-item>
  <van-tabbar-item icon="manager-o" to="/User">标签</van-tabbar-item>
</van-tabbar>
  </dir>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>

</style>
