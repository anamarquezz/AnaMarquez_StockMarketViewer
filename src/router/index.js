import Vue from "vue";
import VueRouter from "vue-router";
import principal from "../views/principal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "principa;",
    component: principal
  } 
];

const router = new VueRouter({
  routes
});

export default router;
