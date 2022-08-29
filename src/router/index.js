import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store/index";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import RestorePassword from "../views/RestorePassword.vue";
import RestorePasswordStep1 from "../views/RestorePasswordStep1.vue";
import RestorePasswordStep2 from "../views/RestorePasswordStep2.vue";

import Courses from "../views/studies/courses/Courses.vue";
import AddEditCourse from "../views/studies/courses/Course/AddEditCourse.vue";
import AddEditModule from "../views/studies/module/AddEditModule.vue";
import AddEditLesson from "../views/studies/lesson/AddEditLesson.vue";

import Marketing from "../views/marketing/Marketing.vue";
import PushNotifications from "../views/marketing/push-notifications/PushNotifications.vue";
import SpecialOffers from "../views/marketing/special-offers/SpecialOffers.vue";

import Users from "../views/users/Users.vue";

import Students from "../views/students/Students.vue";
import AddEditStudent from "../views/students/Student/AddEditStudent.vue";

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
      name: "Login",
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
      name: "Главная",
    },
  },
  {
    path: "/students",
    name: "Students",
    component: Students,
    meta: {
      layoutClass: "Students",
      name: "Студенты",
    },
  },
  {
    path: "/students/:id/edit",
    name: "Student",
    component: AddEditStudent,
    meta: {
      layoutClass: "Student",
      name: "Студент",
    },
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
    meta: {
      layoutClass: "Calendar",
      name: "Календарь",
    },
  },
  {
    path: "/marketing",
    name: "Marketing",
    component: Marketing,
    meta: {
      layoutClass: "Marketing",
      name: "Маркетинг",
    },
  },
  {
    path: "/marketing/push",
    name: "PushNotifications",
    component: PushNotifications,
    meta: {
      layoutClass: "PushNotifications",
      name: "Push - уведомления",
    },
  },
  {
    path: "/marketing/offers",
    name: "SpecialOffers",
    component: SpecialOffers,
    meta: {
      layoutClass: "SpecialOffers",
      name: "Специальные предложения",
    },
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
    meta: {
      layoutClass: "Courses",
      name: "Курсы",
    },
  },
  {
    path: "/courses/:id/",
    name: "Course",
    component: AddEditCourse,
    meta: {
      layoutClass: "Course",
      name: "Курс",
    },
  },
  {
    path: "/courses/:id/modules/:id",
    name: "Module",
    component: AddEditModule,
    meta: {
      layoutClass: "Module",
      name: "Модуль",
    },
  },
  {
    path: "/courses/:id/modules/:id/lessons/:id",
    name: "Lesson",
    component: AddEditLesson,
    meta: {
      layoutClass: "Lesson",
      name: "Lesson",
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
