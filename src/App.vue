<template>
  <div>
    <router-view></router-view>
    <Footer v-if="$route.path !== '/store' && $route.path !== '/oder'"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer/MyFooter.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style>
</style>
