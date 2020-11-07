import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入样式
import "@/assets/css/base.css";
import "@/assets/css/el-reset.css";

// 全局引入1
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
// 全局引入1
Vue.use(ElementUI);

// 按需引入
// import { Carousel,CarouselItem} from "element-ui"
// 注册组件
// Vue.component("el-carousel",Carousel)
// Vue.component("el-carousel-item",CarouselItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
