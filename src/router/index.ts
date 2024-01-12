import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import SingleList from "../views/SingleList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/single-list/:name/:id",
    name: "SingleList",
    component: SingleList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
