import { createRouter, createWebHistory } from "vue-router";

//importation des pages

import Home from "@/views/home.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
