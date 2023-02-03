<template>
  <div class="app-container">
    <Header></Header>
    <Goods 
    v-for='item in list' :key = item.id
    :img = 'item.goods_img'
    :id = 'item.id'
    :goods ='item.goods_name'
    :status = 'item.goods_state'
    :price = 'item.goods_price'
    :count = 'item.goods_count'
    @status-change = 'getNewStatus'
    ></Goods>
    <Footer :checked='getchecked' :Full = 'Fullcheck' @getFull = 'stateFull' :amt = 'getTotal'></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header/Header'
import Goods from '@/components/Goods/Goods'
import Footer from '@/components/Footer/Footer'
import bus from '@/components/bus.js'
export default {
  components : {
    Header,
    Goods,
    Footer,
  },
  computed: {
    Fullcheck() {
       return this.list.every((item)=>{
        return item.goods_state === true
       })
    },
    getTotal(){
      return this.list.filter(item=>item.goods_state).reduce((total,item)=>{return total+=item.goods_count*item.goods_price},0)
    },
    getchecked(){
      return this.list.filter(item=>item.goods_state).reduce((total,item)=>{return total+=1},0)
    },
  }
  ,
  methods:{
    async getData(){
    const{data:res} = await axios.get('https://www.escook.cn/api/cart')
    if(res.status ===200) {
      this.list = res.list
      console.log(res.list);
    }
    },
    getNewStatus(e){
      this.list.forEach(item => {
        if(item.id===e.id){
          item.goods_state = e.val
          console.log(item.goods_state);
        }
      })
    },
    stateFull(e){
        this.list.forEach((item)=>{
        item.goods_state = e
      })   
    },
  },
  created(){
    this.getData()

    bus.$on('share',(e)=>{
      console.log(e);
    this.list.some((item)=>{
      if(item.id === e.id){
        item.goods_count = e.val
      }
    })
  })
    bus.$on('share2',(e)=>{
      console.log(e);
    this.list.some((item)=>{
      if(item.id === e.id){
        item.goods_count = e.val
      }
    })
  })
  },
  data(){
    return {
      list : []
    }
  }
}

</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
