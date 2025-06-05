import "./assets/main.css";
import "@splidejs/splide/dist/css/splide.min.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const app = createApp(App);

app.use(router);
app.component("Splide", Splide);
app.component("SplideSlide", SplideSlide);
app.mount("#app");

AOS.init();
app.use(Toast);
