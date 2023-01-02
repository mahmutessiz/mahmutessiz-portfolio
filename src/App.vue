<script>
import MainMenu from "./components/MainMenu.vue";
import MainSection from "./components/MainSection.vue";
export default {
  components: {
    MainMenu,
    MainSection,
  },
};
</script>

<template>
  <header>
    <MainMenu />
    <MainSection />
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
