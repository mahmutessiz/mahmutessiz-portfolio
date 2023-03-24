import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    /*     {
      path: "/galery",
      name: "galery",
      component: () => import("../views/ImageGalery.vue"),
    }, */
    {
      path: "/galery/:id",
      name: "imageGalery",
      component: () => import("../views/ImageGalery.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/ImageGalery.vue"),
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
