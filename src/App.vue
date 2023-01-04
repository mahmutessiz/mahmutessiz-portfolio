<script>
import MainMenu from "./components/MainMenu.vue";
import MainSection from "./components/MainSection.vue";
import SideBar from "./components/SideBar.vue";
import ProjectSection from "./components/ProjectSection.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  components: {
    MainMenu,
    MainSection,
    SideBar,
    ProjectSection,
    FooterSection,
  },
};
</script>

<template>
    <MainMenu class="sticky -top-2" />
    <SideBar />
    <MainSection />
    <ProjectSection />
    <FooterSection/>
</template>
