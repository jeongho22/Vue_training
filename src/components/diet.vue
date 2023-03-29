<template>
  <div id="app">

    <div>
      <input class="search-input" type="text" placeholder="검색어를 입력해 주세요." @input="searchGroup($event)" />
    </div>

    <button @click="sortKcalDesc">칼로리 높은순 정렬</button>
    <button @click="sortKcalAsc">칼로리 낮은순 정렬</button>
    <div v-for="(foodItem, index) in foodBox" :key="index">
      <div class="search">
      <div>

        <hr size="5">
        <h4 class="card-header">{{ index + 1 }}</h4>
      <div class="food-item">
        {{ foodItem }}
      </div>
      <div class="kcal-value">
        {{ kcal[index] }}
      </div>
      <div class="brand-value">
        {{  brand[index] }}
        <hr size="5">
      </div>
      </div>
    </div>
      </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  created() {
    axios
        .get(
            "http://openapi.foodsafetykorea.go.kr/api/85d04e2da03640c4b34f/I2790/json/1/1000/DESC_KOR=브라우니"
        )
        .then((food) => {
          console.log(food.data.I2790.row);
          for (let i = 0; i < 190; i++) {
            if (food.data.I2790.row[i].NUTR_CONT1 < 1000) {
              this.foodBox.push(food.data.I2790.row[i].DESC_KOR);
              this.kcal.push(food.data.I2790.row[i].NUTR_CONT1);
              this.brand.push(food.data.I2790.row[i].MAKER_NAME);
            }
          }
        });
  },
  data() {
    return {
      foodBox: [],
      kcal: [],
      brand : [],
    };
  },
  methods: {
    sortKcalDesc() {
      const sortedIndices = this.kcal
          .map((value, index) => ({ value, index }))
          .sort((a, b) => b.value - a.value)
          .map(({ index }) => index);
      this.foodBox = sortedIndices.map((index) => this.foodBox[index]);
      this.kcal = sortedIndices.map((index) => this.kcal[index]);
    },
    sortKcalAsc() {
      const sortedIndices = this.kcal
          .map((value, index) => ({ value, index }))
          .sort((a, b) => a.value - b.value)
          .map(({ index }) => index);
      this.foodBox = sortedIndices.map((index) => this.foodBox[index]);
      this.kcal = sortedIndices.map((index) => this.kcal[index]);
    },
    searchGroup(event) {
      // console.log(event.target.value);
      // 검색기능
      for (let i = 0; i < 189; i++) {
        if (
            this.foodBox[i].includes(event.target.value) === false &&
            this.brand[i].includes(event.target.value) === false
        ) {
          document.querySelectorAll(".search")[i].style.display = "none";
        } else {
          document.querySelectorAll(".search")[i].style.display = "flex";
        }
        // 모든 단어를 찾아주세요
        // includes 문자가 있으면 true , 없으면 false // false일때 안보여줌 , true 일때 flex보여줌
      }
    },
  },
}
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
