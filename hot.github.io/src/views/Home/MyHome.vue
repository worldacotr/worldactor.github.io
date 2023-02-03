<template>
  <div class = 'home-containt'>
  <Header></Header>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <Artic v-for="item in list" :key="item.id"
        :title="item.title"
        :author="item.aut_name"
        :pubdate="item.pubdate"
        :count ="item.comm_count"
        :id="item.art_id"
        :cover="item.cover"
        @removeNews="removeNewss"
></Artic>
</van-list>
</van-pull-refresh>
  </div>
</template>

<script>
import { articApi } from '@/api/articApi'
import Header from '@/components/Header/MyHeader.vue'
import Artic from '@/components/Artic/MyArtic.vue'
export default {
  components: {
    Header,
    Artic
  },
  methods: {
    async getData (isRefresh) {
      const { data: res } = await articApi(this.limit, this.page)
      console.log(res)
      if (isRefresh) {
        this.list = [...res, ...this.list]
        this.loading = false
      } else {
        this.list = [...this.list, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
    },
    removeNewss (val) {
      this.list = this.list.filter(item => item.art_id !== val)
    },
    onLoad () {
      this.page++
      this.getData()
    },
    onRefresh () {
      this.page++
      this.getData(true)
    }
  },
  created () {
    this.getData()
  },
  data () {
    return {
      list: [],
      limit: 10,
      page: 1,
      loading: true,
      finished: false
    }
  }
}
</script>

<style lang="less" scoped>
.home-containt{
  padding: 46px 0 50px 0;
}
/deep/ .van-nav-bar{
  background-color: skyblue !important;
}
</style>
