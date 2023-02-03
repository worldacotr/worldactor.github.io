<template>
  <div class="create-order">
    <Header></Header>
    <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
    <div class="content">
      <div v-for="(item, index) in store.$state.orderList" :key="index">
        <van-card
          :num="item.num"
          :price="item.price"
          :title="item.title"
          :thumb="item.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="pay">
        <span>商品金额</span>
        <span
          >￥{{
            store.$state.orderList.reduce((total, item) => {
              return (total += item.num * item.price)
            }, 0)
          }}</span
        >
      </div>
      <van-button type="primary" class="pay-btn" @click="creteOrder"
        >生成订单</van-button
      >
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/MyHeader.vue'
import { ref } from 'vue'
import { showDialog, showToast } from 'vant'
import { useMainStore } from '@/store/index'
import { useRouter } from 'vue-router'
export default {
  components: {
    Header
  },
  setup() {
    const store = useMainStore()
    const router = useRouter()
    const tel = ref('13000000000')
    const name = ref('张三')
    const onEdit = () => showToast('edit')
    const creteOrder = () => {
      showDialog({
        title: '提示',
        message: '恭喜您的订单已完成',
        theme: 'round-button'
      }).then(() => {
        // on close
      })
      store.clearOderList()
      router.push('/')
    }
    return {
      tel,
      name,
      onEdit,
      store,
      creteOrder
    }
  }
}
</script>

<style lang="less" scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    position: absolute;
    bottom: 0;
    left: 0;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
