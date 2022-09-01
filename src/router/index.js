import Vue from "vue";
import VueRouter from "vue-router";

import store from "@/store/index";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import RestorePassword from "../views/RestorePassword.vue";
import RestorePasswordStep1 from "../views/RestorePasswordStep1.vue";
import RestorePasswordStep2 from "../views/RestorePasswordStep2.vue";

import Courses from "../views/studies/courses/Courses.vue";
import AddCourse from "../views/studies/courses/Course/AddCourse.vue";
import EditCourse from "../views/studies/courses/Course/EditCourse.vue";

import AddModule from "../views/studies/module/AddModule.vue";
import EditModule from "../views/studies/module/EditModule.vue";

import AddLesson from "../views/studies/lesson/AddLesson.vue";
import EditLesson from "../views/studies/lesson/EditLesson.vue";

import Homeworks from "../views/homework/Homeworks.vue";
import EditHomework from "../views/homework/Homework/EditHomework.vue";

import Marketing from "../views/marketing/Marketing.vue";
import PushNotifications from "../views/marketing/push-notifications/PushNotifications.vue";
import SpecialOffers from "../views/marketing/special-offers/SpecialOffers.vue";
import SpecialOfferAdd from "../views/marketing/special-offers/SpecialOfferAdd.vue"
import SpecialOfferEdit from "../views/marketing/special-offers/SpecialOfferEdit.vue"

import Users from "../views/users/Users.vue";

import Students from "../views/students/Students.vue";
import EditStudent from "../views/students/Student/EditStudent.vue";

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
    path: "/students/:StudentId",
    name: "Student",
    component: EditStudent,
    meta: {
      layoutClass: "Student",
      name: "Редактировать профиль студента",
    },
  },
  {
    path: "/homeworks",
    name: "Homeworks",
    component: Homeworks,
    meta: {
      layoutClass: "Homeworks",
      name: "Домашние задания",
    },
  },
  {
    path: "/homeworks/:homeworkId",
    name: "Homework",
    component: EditHomework,
    meta: {
      layoutClass: "Homework",
      name: "Редактировать домашнее задание",
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
    path: "/marketing/offers/add",
    name: "SpecialOffer",
    component: SpecialOfferAdd,
    meta: {
      layoutClass: "SpecialOffer",
      name: "Добавление специального предложения",
    },
  },
  {
    path: "/marketing/offers/:id",
    name: "SpecialOffer",
    component: SpecialOfferEdit,
    meta: {
      layoutClass: "SpecialOffer",
      name: "Редактирование специального предложения",
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
    path: "/courses/add",
    name: "AddCourse",
    component: AddCourse,
    meta: {
      layoutClass: "AddCourse",
      name: "Добавить курс",
    },
  },
  {
    path: "/courses/:CourseId/",
    name: "Course",
    component: EditCourse,
    meta: {
      layoutClass: "Course",
      name: "Редактировать курс",
    },
  },
  {
    path: "/courses/:CourseId/modules/add",
    name: "AddModule",
    component: AddModule,
    meta: {
      layoutClass: "AddModule",
      name: "Добавить модуль",
    },
  },
  {
    path: "/courses/:CourseId/modules/:ModuleId",
    name: "Module",
    component: EditModule,
    meta: {
      layoutClass: "Module",
      name: "Редактировать модуль",
    },
  },
  {
    path: "/courses/:CourseId/modules/:ModuleId/lessons/add",
    name: "AddLesson",
    component: AddLesson,
    meta: {
      layoutClass: "AddLesson",
      name: "Добавить урок",
    },
  },
  {
    path: "/courses/:CourseId/modules/:ModuleId/lessons/:LessonId",
    name: "Lesson",
    component: EditLesson,
    meta: {
      layoutClass: "Lesson",
      name: "Редактировать урок",
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
