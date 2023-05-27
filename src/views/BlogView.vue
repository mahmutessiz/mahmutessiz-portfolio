<script setup>
import BlogPostData from "../data/BlogPostData.json";
import { RouterLink } from "vue-router";

const blogPostData = BlogPostData;
</script>
<template>
  <header
    class="sticky -top-1 flex w-full justify-center bg-primary-bg-darkslategray"
  >
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

  <section
    class="flex w-full flex-wrap items-center justify-center gap-4 px-2 py-12"
  >
    <div
      class="flex w-96 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border border-primary-text-thistle/50 text-primary-text-thistle"
      v-for="blogPost in blogPostData"
      :key="blogPost"
    >
      <img :src="blogPost.pictures[0]" :alt="blogPost.name" />
      <ul class="w-full px-2 pb-4">
        <li class="pb-2 text-xl font-bold">{{ blogPost.name }}</li>
        <li class="line-clamp-5 text-primary-text-thistle/80">
          {{ blogPost.description }}
        </li>
        <li class="flex w-full justify-end px-4 pt-4">
          <router-link :to="'/blog-post/' + blogPost.param">
            <button
              class="flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-white transition-all duration-200 hover:border-primary-text-thistle/50 hover:text-white/50"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m3 8.41l9 9l7-7V15h2V7h-8v2h4.59L12 14.59L4.41 7L3 8.41z"
                />
              </svg>
            </button>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
