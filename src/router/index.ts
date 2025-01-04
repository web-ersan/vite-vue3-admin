import { createWebHistory, createRouter } from "vue-router";
import { BaseRoutes } from "./route";
const router = createRouter({
  history: createWebHistory(),
  routes:BaseRoutes
});
export default router;
