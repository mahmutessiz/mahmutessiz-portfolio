<script>
import ProjectSectionItems from "./side-components/ProjectSectionItems.vue";
import ChangeStyleButtons from "./side-components/ChangeStyleButtons.vue";
export default {
  components: {
    ProjectSectionItems,
    ChangeStyleButtons,
  },
};
</script>

<template>

  <section
    class="flex flex-col items-center justify-center bg-primary-bg-black py-8"
  >
    <div class="flex w-1/2 flex-col items-center justify-center">
      <h2 class="text-3xl font-bold text-primary-text-thistle">Projects</h2>
      <div class="w-2/3 border-b"></div>
    </div>
    <ChangeStyleButtons />
    <ProjectSectionItems />
  </section>
</template>
