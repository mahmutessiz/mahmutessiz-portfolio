<script>
import MainMenu from "./components/MainMenu.vue";
import MainSection from "./components/MainSection.vue";
import SideBar from "./components/SideBar.vue";
import ProjectSection from "./components/ProjectSection.vue";
import FooterSection from "./components/FooterSection.vue";
import ContactSection from "./components/ContactSection.vue";
export default {
  components: {
    MainMenu,
    MainSection,
    SideBar,
    ProjectSection,
    FooterSection,
    ContactSection,
  },
};
</script>

<template>
  <MainMenu class="sticky -top-2" />
  <SideBar />
  <MainSection />
  <ProjectSection />
  <ContactSection />
  <FooterSection />
</template>
