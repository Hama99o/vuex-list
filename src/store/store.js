import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =new Vuex.Store({
  strict:true,
  state:{
    products: [
      {name: 'Footbal', price: 20},
      {name: 'Camera', price: 220},
      {name: 'Cycle', price: 520},
      {name: 'T-Shirt', price: 100}
    ]
  },
  getters:{
    saleProducts: state =>{
      var saleProducts = state.products.map(product => {
        return {
          name:'**' + product.name + '**',
          price: product.price / 2
        }
      });
      return saleProducts
    }
  },
  mutations:{
    reducePrice: state =>{
      state.products.forEach(product =>{
        product.price -= 1;
      })
    }
  },
  actions:{
    reducePrice: context => {
      setTimeout(function() {
        context.commit('reducePrice')
      }, 3000)
    }
  }
})
