import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "Mahmut Eşsiz",
      },
      component: HomeView,
    },
    {
      path: "/galery/:id",
      name: "imageGalery",
      meta: {
        title: "Mahmut Eşsiz | Project images",
      },
      component: () => import("../views/ImageGalery.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      meta: {
        title: "Mahmut Eşsiz | Blog",
      },
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/blog-post/:name",
      name: "blog-post",
      meta: {
        title: "Mahmut Eşsiz | Blog Post",
      },
      component: () => import("../views/BlogPostsView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      meta: {
        title: "Mahmut Eşsiz | 404 Error",
      },
      name: "notFound",
      component: () => import("@/views/ErrorView.vue"),
    },
  ],
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
