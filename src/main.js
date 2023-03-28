import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router.js";
import store from "./store.js";
import ElementPlus from "element-plus";
import ko from "element-plus/es/locale/lang/ko";

let app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");

app.use(ElementPlus, { locale: ko });
