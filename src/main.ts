import Vue from "vue";
import App from "./App.vue";
import '../src/sass/test.scss';
import router from './router';

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
