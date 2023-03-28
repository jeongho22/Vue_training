<template>
    <p v-for="(a, i) in 타이틀" :key="i">


    <div class="card">
        <h5 class="card-header">{{ i + 1 }}.Daily News</h5>
        <div class="card-body">
            <h5 class="card-title">{{ 타이틀[i] }}</h5>
            <hr size="5">
            <p class="card-text">{{ 기사내용[i] }}</p>
            <hr size="5">
            <a :href="링크[i]" class="btn btn-primary">바로가기</a>
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
            타이틀: [],
            링크: [],
            기사내용: [],
            isLoading: false,
        }
    },

    mounted() {
        this.isLoading = true
        const { parse } = require('rss-to-json');
        // // async await
        // (async () => {

        //     var rss = await parse('https://cors-anywhere.herokuapp.com/https://news.sbs.co.kr/news/SectionRssFeed.do?sectionId=14&plink=RSSREADER');
        //     console.log(JSON.stringify(rss, null, 3))

        // })();

        parse('https://cors-anywhere.herokuapp.com/https://news.sbs.co.kr/news/SectionRssFeed.do?sectionId=14&plink=RSSREADER')
            .then((rss) => {
                this.isLoading = false
                console.log(JSON.stringify(rss, null, 3));
                for (let i = 0; i < 10; i++) {
                    this.타이틀.push(rss.items[i].title)
                    this.링크.push(rss.items[i].link)
                    this.기사내용.push(rss.items[i].description)
                }
            });

    },

}
</script>

<style>
#app {
    font-family: Helvetica, Arial, sans-serif;
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
