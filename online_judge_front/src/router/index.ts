import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/index.vue")
  },
  {
    path: "/question",
    name: "Question",
    component: () => import("../views/Questionnaire/index.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue")
  },
  {
    path: "/add",
    name: "AddQuestion",
    component: () => import("../views/Home/addQuestion.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
