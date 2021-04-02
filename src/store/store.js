import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =new Vuex.Store({
  state:{
    products: [
      {name: 'Footbal', price: 20},
      {name: 'Camera', price: 220},
      {name: 'Cycle', price: 520},
      {name: 'T-Shirt', price: 100}
    ]
  }
})
