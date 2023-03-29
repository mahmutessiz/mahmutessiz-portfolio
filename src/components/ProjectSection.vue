<script>
import ProjectSectionItems from "./side-components/ProjectSectionItems.vue";
export default {
  components: {
    ProjectSectionItems,
  },
};
</script>

<template>
  <section
    class="mt-24 flex flex-col items-center justify-center bg-primary-bg-black pb-8"
    id="project"
  >
    <div class="flex w-1/2 flex-col items-center justify-center">
      <h2 class="text-3xl font-bold text-primary-text-thistle">Projects</h2>
      <div class="w-2/3 border-b"></div>
    </div>
    <br />
    <ProjectSectionItems />
  </section>
</template>
