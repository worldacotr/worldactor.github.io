<template>
  <div>
    用户
  </div>
</template>

<script>
import { articApi } from '@/api/articApi'
export default {
  data () {
    return {
      list: [],
      limit: 5,
      page: 1
    }
  },
  methods: {
    async getData () {
      const { data: res } = await articApi(this.limit, this.page)
      this.list = res
      console.log(res)
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="less" scoped>
</style>
