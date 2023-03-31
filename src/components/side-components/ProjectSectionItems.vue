<script>
import ProjectData from "../../data/ProjectData.json";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      ProjectData: ProjectData,
      router: useRouter(),
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
          class="min-h-[10rem] cursor-pointer sm:min-h-[15rem] sm:min-w-[20rem] md:w-[28rem]"
          @click="router.push(`/galery/${projectData.routerName}`)"
        />
      </div>

      <ul class="flex flex-col gap-2 py-4 px-6 sm:w-1/2">
        <li class="text-lg font-bold text-white/70">
          {{ projectData.projectName }}
        </li>
        <li class="-mt-2 pb-2">{{ projectData.projectDescription }}</li>
        <li>
          <span class="font-bold text-white/60">Tools & languages:</span> <br />
          {{ projectData.tools }}
        </li>
        <li>
          <span class="font-bold text-white/60">Links: </span><br />
          <a :href="projectData.linkGithub" target="_blank">Github,</a>
          <a
            :href="projectData.linkBlog"
            target="_blank"
            v-if="projectData.linkBlog != ''"
          >
            Blog,</a
          >
          <a :href="projectData.linkDemo" target="_blank"> Live demo</a>
        </li>
      </ul>
    </div>
  </div>
</template>
