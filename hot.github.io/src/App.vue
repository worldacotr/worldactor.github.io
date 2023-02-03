<template>
  <dir>
    <router-view></router-view>
    <Footer></Footer>
  </dir>
</template>

<script>
import Footer from '@/components/Footer/MyFooter.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="less" scoped>
</style>
