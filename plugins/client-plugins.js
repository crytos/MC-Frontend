import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.use(VueCarousel);
Vue.use(VueAwesomeSwiper);

var sal;
if (process.client) {
  sal = require("sal.js");
  sal();
}