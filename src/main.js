import "jquery/dist/jquery.slim.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue';
import AboutVue from "./pages/About.vue";
import Summary from "./pages/Summary.vue";
import Countries from "./pages/Countries.vue";

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

const routes = [{
    path: "/summary",
    component: Summary
  },
  {
    path: "/countries",
    component: Countries
  },
  {
    path: "/about",
    component: AboutVue
  }
];
const router = new VueRouter({
  routes: routes
});
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')