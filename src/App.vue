<script>
import MainMenu from "./components/MainMenu.vue";
import MainSection from "./components/MainSection.vue";
import SideBar from "./components/SideBar.vue";
import ProjectSection from "./components/ProjectSection.vue";
export default {
  components: {
    MainMenu,
    MainSection,
    SideBar,
    ProjectSection,
  },
};
</script>

<template>
  <header>
    <MainMenu class="sticky -top-4" />
    <SideBar />
    <MainSection />
    <ProjectSection />
  </header>
</template>
