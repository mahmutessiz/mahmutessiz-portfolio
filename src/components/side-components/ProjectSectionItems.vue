<script>
import ProjectData from "../../data/ProjectData.json";

export default {
  data() {
    return {
      ProjectData: ProjectData,
    };
  },
};
</script>

<template>
  <!-- Project items showdown -->
  <div class="grid w-full place-items-center px-4 sm:px-8">
    <div
      v-for="projectData in ProjectData"
      :key="projectData.key"
      class="mt-12 flex max-w-[60rem] flex-wrap items-center justify-between gap-4 overflow-hidden rounded-lg border border-primary-text-thistle/50 text-white/50 sm:w-4/5 md:flex-nowrap md:gap-8"
    >
      <div class="">
        <img
          :src="projectData.imageSrc"
          :alt="projectData.projectName"
          class="min-h-[10rem] sm:min-h-[15rem] sm:min-w-[20rem] md:w-[28rem]"
        />
      </div>

      <ul class="flex flex-col gap-2 py-4 px-6 sm:w-1/2">
        <li class="py-2 text-lg font-bold text-white/70">
          {{ projectData.projectName }}
        </li>
        <li>{{ projectData.projectDescription }}</li>
        <li>
          <span class="font-bold text-white/60">Tools & languages:</span> <br />
          {{ projectData.tools }}
        </li>
        <li>
          <span class="font-bold text-white/60">Links: </span><br />
          <a :href="projectData.linkGithub">Github,</a>
          <a :href="projectData.linkGithub" v-if="projectData.linkBlog != ''">
            Blog,</a
          >
          <a :href="projectData.linkGithub"> Live demo</a>
        </li>
      </ul>
    </div>
  </div>
</template>
