<template>



  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="" href="#" @click="$router.push('/')"> <!-- 홈버튼 -->
        <img src="https://www.pngplay.com/wp-content/uploads/4/Alphabet-B-No-Background.png" alt="Logo" width="43.18"
          height="32" class="d-inline-block align-text-top">
      </a>

      <clock /> <!-- 컴포넌트 시간 추가-->

      <div>
        <button type="button" @click="$router.go(-1)" class="btn text-white" style="background-color: black">
          <!-- 뒤로가기 -->
          🡸
        </button>
        <button type="button" @click="$router.go(1)" class="btn text-white" style="background-color: black">
          <!-- 앞으로가기 -->
          🡺
        </button>
      </div>
    </div>
  </nav>




  <!-- 부트스트랩 사이트에서 탭 기능 구현 -->

  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
<!--      <weather /> &lt;!&ndash; 컴포넌트 날씨 추가&ndash;&gt;-->
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" @click="$store.commit('좋아요')">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
            @click="$store.commit('끄기')"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
<!--              <hr size="5">-->
<!--              <button type="button" @click="$router.push('/Emergency/')" class="btn btn-dark">-->
<!--                &lt;!&ndash; 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현&ndash;&gt;-->
<!--                속보-->
<!--              </button>-->
<!--              <hr size="5">-->
<!--              <button type="button" @click="$router.push('/Politics/')" class="btn btn-primary">-->
<!--                &lt;!&ndash; 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현&ndash;&gt;-->
<!--                정치-->
<!--              </button>-->
<!--              <hr size="5">-->
<!--              <button type="button" @click="$router.push('/economy/')" class="btn btn-secondary">-->
<!--                &lt;!&ndash; 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현&ndash;&gt;-->
<!--                경제-->
<!--              </button>-->
<!--              <hr size="5">-->
<!--              <button type="button" @click="$router.push('/Entertainment/')" class="btn btn-success">-->
<!--                &lt;!&ndash; 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현&ndash;&gt;-->
<!--                연예-->
<!--              </button>-->
<!--              <hr size="5">-->
<!--              <button type="button" @click="$router.push('/Sport/')" class="btn btn-danger">-->
<!--                &lt;!&ndash; 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현&ndash;&gt;-->
<!--                스포츠-->
<!--              </button>-->
<!--              <hr size="5">-->
<!--              <button type="button" @click="$router.push('/Society/')" class="btn btn-warning">-->
<!--                &lt;!&ndash; 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현&ndash;&gt;-->
<!--                사회-->
<!--              </button>-->
<!--              <hr size="5">-->
<!--              <button type="button" @click="$router.push('/Rank/')" class="btn btn-info">-->
<!--                &lt;!&ndash; 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현&ndash;&gt;-->
<!--                Youtube 뉴스-->
<!--              </button>-->
<!--              <hr size="5">-->
<!--              <button type="button" @click="$router.push('/seocho/')" class="btn btn-light">-->
<!--                &lt;!&ndash; 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현&ndash;&gt;-->
<!--                서초역 날씨-->
<!--              </button>-->
              <hr size="5">
              <button type="button" @click="$router.push('/youtube/')" class="btn btn-info">
                <!-- 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현-->
                유튜브 뉴스기사
              </button>

              <hr size="5">
              <button type="button" @click="$router.push('/daily/')" class="btn btn-warning">
                <!-- 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현-->
                오늘은 뭐 입지?
              </button>

              <hr size="5">
              <button type="button" @click="$router.push('/diet/')" class="btn btn-danger">
                <!-- 각 컴포넌트 부분을 push(/컴포넌트 주소) 하여 이동할수 있도록 구현-->
                다이어트
              </button>

            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>



  <router-view></router-view> <!-- 위의 라우터 링크를 불러와줄려면 꼭 router-view 를 사용해야함. -->






</template>

<script>
import weather from './components/weather';
import clock from './components/clock';
import axios from "axios";



axios.get();



export default {


  components: {
    clock: clock,
    weather: weather,


  },

};




</script>

<style>
#clock {
  font-size: 0.875rem;
  font-weight: 500;
}


body {

  margin: 0;

  padding: 0;

  height: 100%;

}

#wrapper {

  position: relative;

  min-height: 100%;

}

#header {

  height: 70px;

  background: #ccc;

}

#container {

  padding: 20px;

}

#footer {

  position: absolute;

  bottom: 0;

  width: 100%;

  height: 70px;


}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
