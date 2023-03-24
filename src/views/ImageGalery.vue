<script>
import ImagesData from "../data/ImagesData.json";
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      ImagesData: ImagesData,
      route: useRoute(),
      routeName: "disco",
    };
  },
  beforeMount() {
    this.routeName = this.route.params.id;
    console.log(this.routeName);
  },
};
</script>

<template>
  <ul class="flex w-full flex-wrap items-center justify-center gap-4 px-4 py-8">
    <li
      v-for="data in ImagesData[routeName]"
      :key="data"
      class="w-3/4 transition-all duration-200 hover:scale-110 md:w-1/2"
    >
      <img :src="data" alt="project image" />
    </li>
  </ul>
</template>
