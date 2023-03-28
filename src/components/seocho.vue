<template>

    <p v-for="(a, i) in 시간" :key="i">


    <div class="card">
        <h5 class="card-header">{{ i * 3 + 3 }}시간 후</h5>
        <div class="card-body">
            <p class="card-text">{{ 시간[i] }}시</p>
            <p class="card-text">{{ 온도[i] }}℃</p>
            <p class="card-text">{{ 날씨[i] }}</p>

        </div>
    </div>
    </p>



    <div v-if="isLoading == true" class="loading-container">
        <div class="loading">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

</template>

<script>


import axios from 'axios'
axios.get()


export default {
    name: 'App',
    components: {


    },

    data() {
        return {

            시간: [],
            온도: [],
            날씨: [],
            isLoading: false,
        }
    },

    mounted() {
        this.isLoading = true
        const { parse } = require('rss-to-json');
        // async await
        (async () => {

            var rss = await parse('http://cors-anywhere.herokuapp.com/http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1165066000');
            console.log(JSON.stringify(rss, null, 3))
        })();

        parse('http://cors-anywhere.herokuapp.com/http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1165066000')
            .then((rss) => {
                this.isLoading = false
                console.log(JSON.stringify(rss, null, 3));
                for (let i = 0; i < 9; i++) {


                    this.시간.push(rss.items[0].description.body.data[i].hour)
                    this.온도.push(rss.items[0].description.body.data[i].temp)
                    this.날씨.push(rss.items[0].description.body.data[i].wfKor)

                }
            });

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

.my-div {
    height: 450px;
    text-align: center;
}

.loading {
    z-index: 2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 9999px;
}
</style>
