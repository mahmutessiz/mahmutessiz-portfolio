<script setup>
import MainSection from "../components/MainSection.vue";
import SideBar from "../components/SideBar.vue";
import ProjectSection from "../components/ProjectSection.vue";
import MainMenu from "../components/MainMenu.vue";
import BetterAuthWithHonoNuxt from "../components/BetterAuthWithHonoNuxt.vue";
</script>

<template>
  <MainMenu class="sticky -top-2 z-10" />
  <SideBar />
  <MainSection />
  <div class="mt-4 grid w-full place-items-center p-4 md:p-8">
    <h2 class="mb-4 text-3xl font-bold text-primary-text-thistle">
      Blog Posts
    </h2>
    <BetterAuthWithHonoNuxt />
  </div>
  <ProjectSection />
  <section
    id="contact"
    class="px-6 py-20 text-center text-primary-text-thistle"
  >
    <h2 class="mb-4 text-3xl font-bold">Contact me</h2>
    <a href="mailto:mahmutessiz72@gmail.com" class="underline"
      >mahmutessiz72@gmail.com</a
    >
  </section>
</template>
