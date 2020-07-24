import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainMenu from '../views/MainMenu.vue';
import Room from '../views/Room.vue';
import WaitingRoom from '../views/WaitingRoom.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/default",
    name: "MainMenu",
    component: MainMenu
  },
  {
    path: "/waiting-room",
    name: "WaitingRoom",
    component: WaitingRoom
  },
  {
    path: "/room",
    name: "Room",
    component: Room
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
