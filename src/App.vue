<script>
import MainMenu from "./components/MainMenu.vue";
import MainSection from "./components/MainSection.vue";
import SideBar from "./components/SideBar.vue";
export default {
  components: {
    MainMenu,
    MainSection,
    SideBar,
  },
};
</script>

<template>
  <header>
    <MainMenu class="sticky top-0" />
    <SideBar />
    <MainSection />
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
