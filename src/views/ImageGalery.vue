<script>
import ImagesData from "../data/ImagesData.json";
import { useRoute, RouterLink } from "vue-router";
export default {
  data() {
    return {
      ImagesData: ImagesData,
      route: useRoute(),
      routeName: "disco",
      RouterLink,
    };
  },
  beforeMount() {
    this.routeName = this.route.params.id;
  },
};
</script>

<template>
  <nav
    class="left-8 top-20 flex justify-center py-9 font-bold text-white md:fixed"
  >
    <RouterLink to="/">
      <button class="rounded-lg border p-4 hover:scale-95">Go Back</button>
    </RouterLink>
  </nav>
  <ul
    class="flex w-full flex-wrap items-center justify-center gap-8 px-4 pt-8 pb-24"
  >
    <li
      v-for="data in ImagesData[routeName]"
      :key="data"
      class="w-3/4 shadow-lg shadow-purple-500 transition-all duration-200 hover:scale-110 md:w-1/2"
    >
      <img :src="data" alt="project image" />
    </li>
  </ul>
</template>
