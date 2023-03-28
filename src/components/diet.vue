<template>

</template>

<script>

import axios from 'axios'
export default {
  name: 'App',
  components: {

  },
  created() {
    axios.get('http://openapi.foodsafetykorea.go.kr/api/85d04e2da03640c4b34f/I2790/json/1/1000/DESC_KOR=브라우니').then(food=>{
      console.log(food.data);
      this.foodBox.push(food.data[1].MAKER_NAME);
      console.log(this.foodBox);
    })
  },
  data() {
    return {
      foodBox:[],
    }
  },
}/* 27e20bb6285a4f86ae30 */
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>