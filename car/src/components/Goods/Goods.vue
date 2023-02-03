<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input @change = 'statusChange' type="checkbox" class="custom-control-input" :id='id' :checked=status />
        <label class="custom-control-label" :for="id">
          <!-- 商品的缩略图 -->
          <img :src= 'img'  alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ goods }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">{{ price }}</span>
        <!-- 商品的数量 -->
        <Counter :count2 = 'count' :id="id"></Counter>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter/Counter'
export default {
  components:{
    Counter,
  },
  // data(){
  //   return{
  //     cunt : this.count
  //   }
  // },
  props: {
    img : {
      default:'',
      type : String
    },
    id : {
      require : true,
      type:Number
    },
    goods : {
      default:'',
      type : String
    },
    status : {
      default:true,
      type : Boolean
    },
    price : {
      default:0,
      type:Number
    },
    count : {
      default:0,
      type:Number
    }
  },
  methods: {
    statusChange(e){
      // console.log(e.target.id);
      // console.log(e);
      const newStatus = e.target.checked //获取最新的status数据
      console.log(e.target.checked);
      console.log(newStatus);
      this.$emit('status-change',{id:this.id,val:newStatus})
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>
