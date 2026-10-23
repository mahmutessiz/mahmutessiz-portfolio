<script setup>
import { computed } from "vue";
import ImagesData from "../data/ImagesData.json";
import { useRoute, RouterLink } from "vue-router";
const route = useRoute();
const images = computed(() =>
  Object.hasOwn(ImagesData, route.params.id) ? ImagesData[route.params.id] : [],
);
</script>

<template>
  <section class="min-h-screen w-full">
    <nav
      class="left-8 top-20 flex justify-center py-9 font-bold text-white md:fixed"
    >
      <RouterLink to="/">
        <button class="rounded-lg border p-4 hover:scale-95">Go Back</button>
      </RouterLink>
    </nav>
    <p v-if="!images.length" class="py-12 text-center text-white">
      No project images found.
    </p>
    <ul
      class="flex w-full flex-wrap items-center justify-center gap-8 px-4 pb-24 pt-8"
    >
      <li
        v-for="data in images"
        :key="data"
        class="w-3/4 shadow-lg shadow-purple-500 transition-all duration-200 hover:scale-110 md:w-1/2"
      >
        <img :src="data" alt="Project screenshot" loading="lazy" />
      </li>
    </ul>
  </section>
</template>
