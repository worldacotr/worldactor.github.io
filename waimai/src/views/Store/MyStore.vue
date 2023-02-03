<template>
  <div>
    <Header title="店铺"></Header>
    <div class="storeDetails">
      <div class="content">
        <div class="img"></div>
        <div class="foodSort">
          <div class="name">
            {{ data.title }}
            <img :src="data.img" alt="" class="store-img" />
          </div>
          <van-tabs>
            <van-tab
              v-for="item in data.storeData"
              :key="item.id"
              :title="item.name"
              ><FoodList :data="item.data" :id="item.id"></FoodList
            ></van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" dot />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        @click="goCar"
        :badge="store.carList.length"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="handleAddCart(data)"
      />
      <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
    </van-action-bar>
  </div>
</template>

<script>
import Header from '@/components/Header/MyHeader.vue'
import FoodList from '@/components/FoodList/FooterList.vue'
import { onMounted, reactive } from 'vue-demi'
import { storeData } from '@/api/storeApi'
import { useMainStore } from '@/store/index'
import { useRouter } from 'vue-router'
export default {
  components: {
    Header,
    FoodList
  },
  setup() {
    const store = useMainStore()
    const router = useRouter()
    const data = reactive({
      title: 'yyds酸菜鱼',
      img: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      storeData: ''
    })
    const getData = async () => {
      const { data: res } = await storeData()
      // console.log(res)
      data.storeData = res.data
      // console.log(data.storeData)
    }
    onMounted(() => {
      getData()
    })
    const handleAddCart = (data) => {
      store.addCarList(data)
      console.log(store.carList)
    }
    const goCar = () => {
      router.push('/car')
    }
    const goBuy = () => {
      store.addCarList(data)
      router.push('/car')
    }
    return { goBuy, data, handleAddCart, store, goCar }
  }
}
</script>

<style lang="less">
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url('../../assets/yuna.jpg') no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodSort {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;

      // .sort {
      //   margin-top: 10px;
      // }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
