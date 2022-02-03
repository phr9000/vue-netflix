import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: () => import("@/views/home/Home.vue"),
  },
];

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
