<template>
  <div>
    <van-checkbox-group v-model="checked" @change="groupChange">
      <van-checkbox
        :name="item.id"
        v-for="(item, index) in store.$state.carList"
        :key="index"
        checked-color="#ffc400"
      >
        <div class="content-item">
          <div class="left">
            <img :src="item.pic" />
            <div class="text">
              <div class="title">{{ item.title }}</div>
              <div>
                <van-stepper min="" v-model="item.num" :name="item.id" />
                <!-- <van-icon name="add-o" class="van-icon" /> -->
              </div>
            </div>
          </div>
          <div class="price">￥{{ item.price }}</div>
        </div></van-checkbox
      >
    </van-checkbox-group>
    <van-submit-bar
      :price="allPrice"
      @submit="onSubmit(dataa)"
      button-text="提交订单"
      button-color="#ffc400"
      class="sumbmitAll"
    >
      <van-checkbox
        v-model="sumchecked"
        checked-color="#ffc400"
        @click="choseAll"
        >全选</van-checkbox
      >
    </van-submit-bar>
  </div>
</template>

<script>
import { useMainStore } from '@/store/index'
import { computed, onMounted, reactive, toRefs } from 'vue-demi'
import { storeData } from '@/api/storeApi'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const store = useMainStore()
    const router = useRouter()
    const dataa = reactive({
      checked: [],
      sumchecked: true
    })

    const choseAll = () => {
      if (dataa.checked.length !== store.$state.carList.length) {
        dataa.checked = store.$state.carList.map((item) => item.id)
      } else {
        dataa.checked = []
      }
    }
    const groupChange = (result) => {
      // console.log(result);
      if (result.length === store.$state.carList.length) {
        dataa.sumchecked = true
      } else {
        dataa.sumchecked = false
      }
      dataa.checked = result
      // console.log(allPrice)
    }
    const allPrice = computed(() => {
      return (
        store.$state.carList
          .filter((item) => {
            return dataa.checked.includes(item.id)
          })
          .reduce((total, item) => {
            return (total += item.num * item.price)
          }, 0) * 100
      )
    })
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
      dataa.checked = store.$state.carList.map((item) => item.id)
    })
    const onSubmit = (data) => {
      store.addOderList(data)
      router.push('/oder')
    }
    return {
      data,
      store,
      dataa,
      ...toRefs(dataa),
      choseAll,
      groupChange,
      onSubmit,
      allPrice
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-checkbox__label {
  width: 100%;
}
/deep/.sumbmitAll {
  margin-bottom: 50px;
}
.content-item {
  flex: 100;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
  .price {
    position: absolute;
    bottom: 4px;
    right: 4px;
    font-size: 16px;
    font-weight: 600;
  }
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    img {
      margin-left: 10px;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      border-radius: 10px;
    }
    .text {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      position: relative;
      flex: 1;
      .title {
        font-size: 16px;
      }
      .van-icon {
        color: red;
        font-size: 20px;
        position: absolute;
        right: 50px;
        bottom: 4px;
      }
    }
  }
}
</style>
