<template>
  <div id="app">
    <product-list-one v-bind:products="products"> </product-list-one>
    <product-list-two v-bind:products="products"> </product-list-two>

  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';


export default {
  name: 'App',
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  data(){
    return{
      products: [
        {name: 'Footbal', price: 20},
        {name: 'Camera', price: 220},
        {name: 'Cycle', price: 520},
        {name: 'T-Shirt', price: 100}
      ]

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
