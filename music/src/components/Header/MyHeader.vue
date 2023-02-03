<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    // console.log(route.meta)
    const onClickLeft = () => history.back()
    const data = reactive({
      title: route.meta.title
    })
    return {
      onClickLeft,
      ...toRefs(data),
      route
    }
  },
  watch: {
    $route: {
      handler() {
        console.log(this.$route.meta.title)
        this.title = this.$route.meta.title
      }
    }
  }
}
</script>

<style>
</style>
