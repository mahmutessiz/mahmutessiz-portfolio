<script setup>
import { ref } from "vue";
import BlogPostData from "../data/BlogPostData.json";
import { useRoute } from "vue-router";

const route = useRoute();
const blogPostData = BlogPostData;
const blogPost = ref(route.params.name);
</script>

<template>
  <div class="grid h-screen w-full place-items-center bg-black text-white">
    <div v-if="blogPost == 'portfolio'">
      <img
        :src="blogPostData.portfolio.pictures[0]"
        class="m-auto w-2/3"
        alt="blogPostData.portfolio name"
      />
    </div>
    <div v-else>Ups!, nothing here yet.</div>
  </div>
</template>
