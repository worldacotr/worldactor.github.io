import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数main是应用程序中 store 的唯一 id
export const useMainStore = defineStore('main', {
  // other options...
  state: () => {
    return {
      carList: [],
      orderList: []
    }
  },
  getters: {},
  actions: {
    addCarList(data) {
      // this.$patch(state => {state.count++})
      const newList = this.carList
      data.storeData.forEach((item) => {
        item.data.items?.forEach((item) => {
          item.children.forEach((item) => {
            if (item.num > 0) {
              newList.push(item)
            }
          })
        })
      })
      this.carList = newList
      console.log(this.carList)
    },
    addOderList(data) {
      this.orderList = this.carList.filter(item => {
        return data.checked.includes(item.id)
      })
      console.log(this.orderList)
    },
    clearOderList() {
      this.carList = []
      this.orderList = []
    }
  }

})
