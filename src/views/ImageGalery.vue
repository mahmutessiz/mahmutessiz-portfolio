<script>
import ImagesData from "../data/ImagesData.json";
export default {
  data() {
    return {
      ImagesData: ImagesData,
    };
  },
};
</script>

<template>
  <ul>
    <li v-for="data in ImagesData.disco" :key="data">
      <img :src="data" alt="" />
    </li>
  </ul>
</template>
