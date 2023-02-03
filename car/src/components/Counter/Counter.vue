<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" @click = 'mus' class="btn btn-light btn-sm">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{count2}}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" @click = 'add' class="btn btn-light btn-sm">+</button>
  </div>
</template>

<script>
import bus from '@/components/bus.js'
export default {
  props:{
    count2:{
      type:Number,
      default:0,
    },
    id : {
      type:Number,
      default:0,
    }
  },
  methods:{
    add(){
      // this.count++  不要修改props里面的值
      bus.$emit('share',{id:this.id,val:this.count2+1})
    },
    mus(){
      bus.$emit('share2',{id:this.id,val:this.count2-1})
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
