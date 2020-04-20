import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from 'vue-axios';

import AboutVue from "./pages/About.vue";
import Summary from "./pages/Summary.vue";
import Countries from "./pages/Countries.vue";

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

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