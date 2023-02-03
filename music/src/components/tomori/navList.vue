<template>
  <div>
    <div
      v-for="(item, index) in data"
      :key="index"
      class="food"
      @click="toStore"
    >
      <img :src="item.pic" alt="" />
      <div class="item-right">
        <div class="title">{{ item.title }}</div>
        <div class="sales">{{ item.sales }}</div>
        <div class="price">{{ item.price }}</div>
        <div class="lable">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  props: ['data'],
  setup() {
    const router = useRouter()
    const toStore = () => {
      router.push('./store')
    }
    return { toStore }
  }
}
</script>
<style lang="less">
.food {
  margin: 3px 4px;
  display: flex;
  img {
    overflow: hidden;
    width: 120px;
    height: 120px;
    border-radius: 10px;
    flex: 2;
    vertical-align: middle;
  }
  .item-right {
    display: flex;
    flex-flow: column;
    flex: 3;
    .title {
      font-size: 20px;
      padding: 3px 5px;
    }
    .sales {
      font-size: 19px;

      padding: 4px 5px;
    }
    .price {
      font-size: 18px;
      color: red;
      padding: 4px 5px;
    }
    .lable {
      font-size: 18px;
      // background-color: orange;
      padding: 4px 5px 0 5px;
    }
  }
}
</style>
