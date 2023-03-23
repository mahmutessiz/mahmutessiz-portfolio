<script>
import MainSection from "../components/MainSection.vue";
import SideBar from "../components/SideBar.vue";
import ProjectSection from "../components/ProjectSection.vue";
import ContactSection from "../components/ContactSection.vue";

export default {
  components: {
    MainSection,
    SideBar,
    ProjectSection,
    ContactSection,
  },
};
</script>

<template>
  <SideBar />
  <MainSection />
  <ProjectSection />
  <ContactSection />
</template>
