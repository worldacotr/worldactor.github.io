<template>
  <div class="contain">
    <div class="header">
      <div class="text">外卖</div>
      <div class="location">
        <van-icon name="location-o" />
        <span>jason课程</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 身体 -->
    <div class="main">
      <div class="main-bg">
        <div class="serch">
          <input type="text" class="text" />
          <div class="serch-text">搜素</div>
        </div>
        <div class="sort">
          <div class="big-sort">
            <div v-for="item in homeDataList.bigSort" :key="item.id">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
          <div class="small-sort">
            <div v-for="item in homeDataList.samllSort" :key="item.id">
              <!-- <div></div> -->
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tab">
        <van-tabs :active="active">
          <van-tab
            v-for="item in homeDataList.dataStore"
            :key="item.id"
            :title="item.tab"
          >
            <NavList :data="item.data"></NavList
          ></van-tab>
          <!-- <van-tab title="减配送费">内容 2</van-tab>
          <van-tab title="店铺高分">内容 3</van-tab>
          <van-tab title="会员满减">内容 4</van-tab> -->
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import { homeData } from '@/api/homeApi'
import NavList from '@/components/tomori/navList.vue'
export default {
  components: {
    NavList
  },
  setup() {
    const active = ref(0)

    const homeDataList = reactive({ bigSort: '', samllSort: '', dataStore: '' })
    const getHomeData = async () => {
      const { data: res } = await homeData()
      console.log(res.data)
      homeDataList.dataStore = res.data.centent_nav_list
      homeDataList.bigSort = res.data.big_sort
      homeDataList.samllSort = res.data.small_sort
      console.log(homeDataList.dataStore)
      // console.log(homeDataList)
    }

    onMounted(() => {
      getHomeData()
    })
    return { active, homeDataList }
  }
}
</script>

<style lang="less" scoped>
.contain {
  padding: 0 0 50px 0;
  .header {
    background-image: linear-gradient(#ffc400, #fff);
    display: flex;
    justify-content: space-between;
    padding: 20px 40px 30px 40px;
    font-size: 16px;
    .text {
      font-weight: normal;
    }
    .location {
      span {
        margin: 0 10px 0 3px;
      }
    }
  }
  .main {
    margin-top: -18px;

    .main-bg {
      background-color: #fff;
      border-radius: 20px 20px 0 0;
      padding: 10px 20px 0 20px;
      .serch {
        position: relative;
        display: flex;
        justify-content: center;
        .text {
          width: 100%;
          border: 1px solid #ffc400;
          border-radius: 20px;
          height: 30px;
        }
        .serch-text {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          height: 30px;
          line-height: 30px;
          background-color: #ffc400;
          border-radius: 20px;
          width: 50px;
          font-size: 16px;
        }
      }
      .sort {
        padding: 18px 0px 0 0px;
        display: flex;
        flex-flow: column;

        .big-sort {
          display: flex;
          div {
            justify-content: space-between;
            display: flex;
            flex: 1;
            // flex-flow: column;
            align-items: center;
            font-size: 18px;
            div {
              justify-content: space-between;
              display: flex;
              flex: 1;
              flex-flow: column;
              align-items: center;
              font-size: 16px;
            }
            .icon {
              width: 50px;
              height: 50px;
              margin-bottom: 4px;
            }
          }
        }

        .small-sort {
          margin-top: 18px;
          flex-wrap: wrap;
          display: flex;
          width: 100%;
          // width: 20%;
          div {
            // flex-wrap: wrap;
            justify-content: center;
            display: flex;
            min-width: 20%;
            flex-wrap: wrap;
            flex: 1;
            flex-flow: column;
            align-items: center;
            font-size: 14px;
            .icon {
              width: 30px;
              height: 30px;
              margin-bottom: 4px;
            }
          }
        }
      }
    }
    .tab {
      margin-top: 10px;
    }
  }
}
</style>
