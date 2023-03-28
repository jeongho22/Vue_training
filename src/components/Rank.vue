<template> <!--템플릿쪽에서는 for문이 아니라 v-for문을 사용해야함. 각자 for문쓰는게 다름-->



    <div>
        <input class="search-input" type="text" placeholder="검색어를 입력해 주세요." @input="searchGroup($event)" />
    </div>

    <!-- <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    @input="searchGroup($event)">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav> -->



    <div>


        <p v-for="(a, i) in 타이틀" :key="i" class="search"> <!-- v-for 반복문으로 화면에 10개의 기사 뿌려줌.-->
        <div class="d-flex position-relative">
            <p class='display : block; margin : auto'>
                <img :src="사진[i]" class="flex-shrink-0 me-3">
            </p>
            <div>
                <hr size="5">
                <h4 class="card-header">{{ i + 1 }}.Daily News</h4>
                <hr size="5">
                <h5 class="mt-0">{{ 타이틀[i] }}</h5>
                <hr size="5">
                <p>{{ 기사내용[i] }}</p>
                <hr size="5">
                <a :href="링크[i]" class="btn btn-primary">바로가기</a>

            </div>
        </div>
        </p>
    </div>



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
            사진: [],
            타이틀: [],
            기사내용: [],
            링크: [],
            isLoading: false,
        }
    },



    mounted() {

        this.isLoading = true
        const { parse } = require('rss-to-json'); //xml json 파싱 변환하여 호출.

        // async await

        // (async () => {
        //     var rss = await parse('https://cors-anywhere.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=UChlgI3UHCOnwUGzWzbJ3H5w'); // parse 과정 
        //     console.log(JSON.stringify(rss, null, 3))
        // })();


        parse('https://cors-anywhere.herokuapp.com/https://www.youtube.com/feeds/videos.xml?channel_id=UChlgI3UHCOnwUGzWzbJ3H5w')
            .then((rss) => {
                this.isLoading = false
                console.log(JSON.stringify(rss, null, 3))



                for (let i = 0; i < 15; i++) {
                    this.타이틀.push(rss.items[i].title)
                    this.링크.push(rss.items[i].link)
                    this.기사내용.push(rss.items[i].description)
                    this.사진.push(rss.items[i].enclosures[0])     // 결과값을 타이틀 , 링크 ,기사내용, 사진 공간에 저장 push
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
                    document.querySelectorAll(".search")[i].style.display = "none";
                } else {
                    document.querySelectorAll(".search")[i].style.display = "flex";
                }
                // 모든 단어를 찾아주세요
                // includes 문자가 있으면 true , 없으면 false // false일때 안보여줌 , true 일때 flex보여줌 
            }
        },

    },

};





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

* {
    padding: 0;
    margin: 0;
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





















<!-- https://blog.naver.com/PostView.naver?blogId=handam81&logNo=222511770317&parentCategoryNo=&categoryNo=&viewDate=&isShowPopularPosts=false&from=postView -->