import { createWebHistory, createRouter } from "vue-router";
import Politics from "./components/Politics.vue";
import economy from "./components/economy.vue";
import Entertainment from "./components/Entertainment.vue";
import Sport from "./components/Sport.vue";
import Society from "./components/Society.vue";
import Emergency from "./components/Emergency.vue";
import Rank from "./components/Rank.vue";
import seocho from "./components/seocho.vue";
import youtube from "./components/youtube.vue";
import daily from "./components/daily.vue";
import diet from "./components/diet.vue";

// 라우터를 사용하기 위해 컴포넌트 등록후에 링크 주소 지정 및 연결

const routes = [
  {
    path: "/Politics",
    component: Politics,
  },
  {
    path: "/Emergency",
    component: Emergency,
  },
  {
    path: "/economy",
    component: economy,
  },
  {
    path: "/Entertainment",
    component: Entertainment,
  },
  {
    path: "/Sport",
    component: Sport,
  },
  {
    path: "/Society",
    component: Society,
  },
  {
    path: "/Rank",
    component: Rank,
  },
  {
    path: "/seocho",
    component: seocho,
  },
  {
    path: "/youtube",
    component: youtube,
  },
  {
    path: "/daily",
    component: daily,
  },
  {
    path: "/diet",
    component: diet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
