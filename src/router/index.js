import { createRouter, createWebHistory } from "vue-router";

//importation des pages

import Home from "@/views/home.vue";
import Expenses from "@/views/expenses.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/expenses", name: "Expenses", component: Expenses}
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
