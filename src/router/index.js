import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Otra from "../views/Otra.vue";
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/otra",
    name: "Otra",
    component: Otra
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
