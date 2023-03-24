<script>
import FooterSection from "./components/FooterSection.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    FooterSection,
    RouterView,
  },
};
</script>

<template>
  <RouterView />
  <FooterSection />
</template>
