<script>
import MainSection from "../components/MainSection.vue";
import SideBar from "../components/SideBar.vue";
import ProjectSection from "../components/ProjectSection.vue";
import ContactSection from "../components/ContactSection.vue";
import MainMenu from "../components/MainMenu.vue";

export default {
  components: {
    MainSection,
    SideBar,
    ProjectSection,
    ContactSection,
    MainMenu,
  },
};
</script>

<template>
  <MainMenu class="sticky -top-2 z-10" />
  <SideBar />
  <MainSection />
  <ProjectSection />
  <ContactSection />
</template>
