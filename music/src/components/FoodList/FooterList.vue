<template>
  <div class="foodList" v-if="id === 0">
    <van-tree-select
      height="88vw"
      :items="items"
      v-model:main-active-index="activeIndex"
      @click-nav="navClick"
    >
      <template #content>
        <div
          class="content-item"
          v-for="(item, index) in children"
          :key="index"
        >
          <div class="left">
            <img :src="item.pic" />
            <div class="text">
              <div class="title">{{ item.title }}</div>
              <div>
                <van-stepper
                  min=""
                  v-model="item.num"
                  @change="changeNum"
                  :name="item.id"
                />
                <van-icon name="add-o" class="van-icon" />
              </div>
            </div>
          </div>
          <div class="price">￥{{ item.price }}</div>
        </div>
      </template>
    </van-tree-select>
  </div>
  <div v-else>
    {{ data.content }}
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  props: ['data', 'id'],
  setup(props) {
    const ccc = reactive({
      activeIndex: 0,
      items: [{ text: '分组 1' }, { text: '分组 2' }],
      children: []
    })
    const getData = () => {
      const NewArray = []
      props.data?.items?.forEach((item, index) => {
        NewArray.push({
          text: item.text
        })
        if (ccc.activeIndex === index) {
          ccc.children = item.children
        }
      })
      ccc.items = NewArray
    }

    const navClick = (i) => {
      // console.log(2222)
      ccc.activeIndex = i
      getData()
    }

    const changeNum = (value, detail) => {
      ccc.children.forEach((item) => {
        if (item.id === detail.name) {
          item.num = value
        }
        // console.log(item.num)
      })
    }
    onMounted(() => {
      getData()
    })
    return {
      ...toRefs(ccc),
      navClick,
      changeNum
    }
  }
}
</script>

<style lang="less">
.content-item {
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
