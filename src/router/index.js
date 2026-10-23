import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/better-auth-hono-nuxt",
      name: "better-auth-hono-nuxt",
      meta: {
        title: "Mahmut Eşsiz | Better Auth with Hono and Nuxt",
      },
      component: () => import("../views/BetterBlog.vue"),
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 80, behavior: "smooth" };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || "Mahmut Eşsiz";
});

export default router;
