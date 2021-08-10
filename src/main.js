import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";

import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
import studentlist from "./components/studentlist.vue";
import tutorlist from "./components/tutorlist.vue";
import welcome from "./components/welcome.vue";

Vue.use(VueRouter);
const routes = [
  { path: "/", component: welcome },
  { path: "/home", component: Home },

  {
    path: "/login",
    component: Login,
  },
  {
    path: "/reg",
    component: Registration,
  },
  {
    path: "/studentlist",
    component: studentlist,
  },
  {
    path: "/tutorlist",
    component: tutorlist,
  },
];
const router = new VueRouter({
  routes,
});
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
