import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/tasks",
    name: "tasks",
    component: () => import("@/components/TaskList.vue"),
  },
  {
    path: "/create",
    name: "tasks-create",
    component: () => import("@/components/TaskForm.vue"),
  },
  {
    path: "/detail/:id",
    name: "tasks-detail",
    component: () => import("@/components/TaskDetail.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
