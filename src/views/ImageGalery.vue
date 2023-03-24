<script>
import ImagesData from "../data/ImagesData.json";
import { useRoute } from "vue-router";
export default {
  data() {
    return {
      ImagesData: ImagesData,
      route: "disco",
    };
  },
  beforeMount() {
    this.route = this.$route.params.id;
    console.log(this.route);
  },
};
</script>

<template>
  <ul>
    <li v-for="data in ImagesData[route]" :key="data">
      <img :src="data" alt="project image" />
    </li>
  </ul>
</template>
