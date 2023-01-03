<script>
import ProjectSectinItems from "./side-components/ProjectSectinItems.vue";

export default {
  components: {
    ProjectSectinItems,
  },
};
</script>

<template>
  <section class="flex justify-center items-center flex-col bg-primary-bg-black py-8">
    <div class="flex w-1/2 flex-col items-center justify-center">
      <h2 class="text-3xl font-bold text-primary-text-thistle">Projects</h2>
      <div class="w-2/3 border-b"></div>
    </div>
    <ProjectSectinItems />
  </section>
</template>
