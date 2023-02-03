<template>
  <div>
    <Header title="购物车"></Header>
    <CarList v-if="flag"></CarList>
    <Empty v-else></Empty>
  </div>
</template>

<script>
import Empty from '@/components/Empty/MyEmpty.vue'
import Header from '@/components/Header/MyHeader.vue'
import CarList from '@/components/CarList/MyCarList.vue'
import { onMounted, ref } from 'vue'
import { useMainStore } from '@/store/index'
export default {
  components: {
    Header,
    Empty,
    CarList
  },
  setup() {
    const store = useMainStore()
    const flag = ref(true)
    onMounted(() => {
      if (store.$state.carList.length === 0) {
        flag.value = false
      }
    })
    return { flag }
  }
}
</script>

<style>
</style>
