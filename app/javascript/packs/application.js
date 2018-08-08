import Vue from "vue/dist/vue.js"; //defined path here instead of using alias in development.js
import App from "../app.vue";
import router from "../router.js";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import Vuetify from "vuetify";
Vue.use(BootstrapVue);

Vue.use(Vuetify, {
  iconfont: "mdi" // 'md' || 'mdi' || 'fa' || 'fa4'
});

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "babel-core/register";
import "babel-polyfill";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css";

axios.defaults.headers.common = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
