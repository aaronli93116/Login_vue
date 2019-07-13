import Vue from "vue";
import Router from "vue-router";
import LoginComponent from "./components/login.vue";
import HomePageComponent from "./components/homePage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/homePage",
      name: "homePage",
      component: HomePageComponent
    }
  ]
});
