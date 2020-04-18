import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';

import AboutVue from "./pages/About.vue";
import DashboardVue from "./pages/Dashboard.vue";

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

const routes = [{
    path: "/dashboard",
    component: DashboardVue
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