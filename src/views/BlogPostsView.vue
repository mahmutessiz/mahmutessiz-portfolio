<script setup>
import { ref } from "vue";
import BlogPostData from "../data/BlogPostData.json";
import { useRoute } from "vue-router";
import MoviesBlogPost from "../components/side-components/MoviesBlogPost.vue";

const route = useRoute();
const blogPostData = BlogPostData;
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
        <img
          :src="blogPostData.portfolio.pictures[0]"
          class="m-auto w-2/3"
          :alt="blogPostData.portfolio + 'name'"
        />
      </div>

      <!-- Movies Website -->
      <div v-if="blogPost == 'movies'">
        <MoviesBlogPost />
      </div>
      <div v-else>Ups!, nothing here yet.</div>
    </div>
  </section>
</template>
