<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MoviesBlogPost from "../components/side-components/MoviesBlogPost.vue";
import PortfolioBlogPost from "../components/side-components/PortfolioBlogPost.vue";
import QuotesBlogPost from "@/components/side-components/QuotesBlogPost.vue";
import DiscoBlogPost from "@/components/side-components/DiscoBlogPost.vue";
import CocktailBlogPost from "@/components/side-components/CocktailBlogPost.vue";

const route = useRoute();
const posts = {
  portfolio: PortfolioBlogPost,
  movies: MoviesBlogPost,
  quotes: QuotesBlogPost,
  disco: DiscoBlogPost,
  cocktail: CocktailBlogPost,
};
const blogPost = computed(() =>
  Object.hasOwn(posts, route.params.name)
    ? posts[route.params.name]
    : undefined,
);
</script>

<template>
  <header class="flex w-full justify-center bg-primary-bg-black">
    <nav>
      <ul
        class="mb-4 mt-4 flex justify-center gap-4 rounded-3xl bg-primary-bg-black px-6 py-4 text-xs text-primary-text-thistle shadow-md sm:gap-7 sm:text-base"
      >
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white"
        >
          <RouterLink to="/" class="focus:text-white active:text-white"
            >Home</RouterLink
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white"
        >
          <RouterLink to="/blog">Blog</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <section class="w-full bg-primary-bg-darkslategray">
    <div class="grid w-full place-items-center text-white">
      <component :is="blogPost" v-if="blogPost" />
      <p v-else-if="route.params.name === 'auto'" class="py-60 text-3xl">
        Coming Soon...
      </p>
      <p v-else class="py-24">Blog post not found.</p>
    </div>
  </section>
</template>
