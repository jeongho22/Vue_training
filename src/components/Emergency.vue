<template>

    <div>
        <input class="search-input" type="text" placeholder="검색어를 입력해주세요." @input="searchGroup($event)" />

        <p v-for="(a, i) in 타이틀" :key="i" class="group-item">

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
        // async await
        (async () => {

            var rss = await parse('https://cors-anywhere.herokuapp.com/http://www.yonhapnewstv.co.kr/browse/feed/');
            console.log(JSON.stringify(rss, null, 3))
        })();

        parse('https://cors-anywhere.herokuapp.com/http://www.yonhapnewstv.co.kr/browse/feed/')
            .then((rss) => {
                this.isLoading = false
                console.log(JSON.stringify(rss, null, 3));
                for (let i = 0; i < 15; i++) {
                    this.타이틀.push(rss.items[i].title)
                    this.링크.push(rss.items[i].link)
                    this.기사내용.push(rss.items[i].description)
                }
            });

    },

    methods: {
        searchGroup(event) {
            // console.log(event.target.value);
            // 검색기능

            for (let i = 0; i < 15; i++) {
                if (
                    this.타이틀[i].includes(event.target.value) === false &&
                    this.기사내용[i].includes(event.target.value) === false

                ) {
                    document.querySelectorAll(".group-item")[i].style.display = "none";
                } else {
                    document.querySelectorAll(".group-item")[i].style.display = "flex";
                }
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

.loading {
    z-index: 2;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 9999px;
}

.search-input {
    display: block;
    padding: 10px 20px;
    margin: 20px auto;
    width: 640px;
    font-size: 32px;
    outline: none;
}

.group-list {
    margin: 0 auto;
    width: 360px;
}

.group-list li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    list-style-type: none;
}

.group-list span {
    display: block;
    width: 33%;
    text-align: center;
}

.group-list-header {
    font-weight: 700;
    border-bottom: 1px solid #bdbdbd;
}
</style>