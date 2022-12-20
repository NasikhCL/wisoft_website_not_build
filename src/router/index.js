import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/Main_Page.vue"),
  },
  {
    path: "/About",
    name: "AboutPage",
    component: () => import("../views/AboutPage.vue"),
  },
// changed this file
  {
    path: "/Contact",
    name: "ContactPage",
    component: () => import("../views/ContactPage.vue"),
  },
  {
    path: "/Team",
    name: "TeamPage",
    component: () => import("../views/TeamPage.vue"),
  },
  {
    path: "/Blog",
    name: "BlogPage",
    component: () => import("../views/BlogPage.vue"),
  },
  {
    path: "/Services",
    name: "ServicePage",
    component: () => import("../views/ServicePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
