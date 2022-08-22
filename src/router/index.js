import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store/index";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import RestorePassword from "../views/RestorePassword.vue";
import RestorePasswordStep1 from "../views/RestorePasswordStep1.vue";
import RestorePasswordStep2 from "../views/RestorePasswordStep2.vue";

import Courses from "../views/studies/courses/Courses.vue";
import Modules from "../views/studies/modules/Modules.vue";
import Lessons from "../views/studies/lessons/Lessons.vue";

import PushNotifications from "../views/marketing/push-notifications/PushNotifications.vue";
import SpecialOffers from "../views/marketing/special-offers/SpecialOffers.vue";

import Users from "../views/users/Users.vue";
import Students from "../views/students/Students.vue";
import Calendar from "../views/calendar/Calendar.vue";

import Config from "@/config";

Vue.use(VueRouter);

let routes = [
  {
    // will match everything
    path: "*",
    name: "404",
    layout: "login",
    meta: {
      layoutClass: "login",
    },
    component: () => import("../views/404.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "login",
    meta: {
      layoutClass: "login",
      // name: Config.TextLocalization.Login[Language],
    },
  },
  {
    path: "/restore-password",
    name: "RestorePassword",
    component: RestorePassword,
    layout: "login",
    meta: {
      layoutClass: "RestorePassword",
      name: "Восстановить пароль",
    },
  },
  {
    path: "/restore-password/step-1",
    name: "RestorePasswordStep1",
    component: RestorePasswordStep1,
    layout: "login",
    meta: {
      layoutClass: "RestorePasswordStep1",
      name: "Восстановить пароль",
    },
  },
  {
    path: "/restore-password/step-2",
    name: "RestorePasswordStep2",
    component: RestorePasswordStep2,
    layout: "login",
    meta: {
      layoutClass: "RestorePasswordStep2",
      name: "Восстановить пароль",
    },
  },
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layoutClass: "home",
      // name: Config.TextLocalization.Home[Language],
    },
  },
];

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute(route, parentLayout = "default") {
  route.meta = route.meta || {};
  route.meta.layout = route.layout || parentLayout;

  if (route.children) {
    route.children = route.children.map((childRoute) =>
      addLayoutToRoute(childRoute, route.meta.layout)
    );
  }
  return route;
}

routes = routes.map((route) => addLayoutToRoute(route));

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    return {
      x: 0,
      y: 0,
      behavior: "smooth",
    };
  },
});

export default router;
