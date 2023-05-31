<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import MoviesBlogPost from "../components/side-components/MoviesBlogPost.vue";
import PortfolioBlogPost from "../components/side-components/PortfolioBlogPost.vue";
import QuotesBlogPost from "@/components/side-components/QuotesBlogPost.vue";
import DiscoBlogPost from "@/components/side-components/DiscoBlogPost.vue";
import CocktailBlogPost from "@/components/side-components/CocktailBlogPost.vue";

const route = useRoute();
const blogPost = ref(route.params.name);
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
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  </header>

  <section class="w-full bg-primary-bg-darkslategray">
    <!-- portfolio website -->
    <div class="grid w-full place-items-center text-white">
      <div v-if="blogPost == 'portfolio'">
        <PortfolioBlogPost />
      </div>

      <!-- Movies Website -->
      <div v-if="blogPost == 'movies'">
        <MoviesBlogPost />
      </div>

      <!-- Quotes Website -->
      <div v-if="blogPost == 'quotes'">
        <QuotesBlogPost />
      </div>

      <!-- Disco Website -->
      <div v-if="blogPost == 'disco'">
        <DiscoBlogPost />
      </div>

      <!-- Cocktail Website -->
      <div v-if="blogPost == 'cocktail'">
        <CocktailBlogPost />
      </div>

      <!-- Movies Website -->
      <div v-if="blogPost == 'auto'">
        <div class="grid place-items-center py-60 text-3xl">Coming Soon...</div>
      </div>
    </div>
  </section>
</template>
