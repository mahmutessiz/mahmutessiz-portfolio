<script>
import MainMenu from "./components/MainMenu.vue";
import FooterSection from "./components/FooterSection.vue";
import { RouterView } from "vue-router";

export default {
  components: {
    MainMenu,
    FooterSection,
    RouterView,
  },
};
</script>

<template>
  <MainMenu class="sticky -top-2 z-10" />
  <RouterView />
  <FooterSection />
</template>
