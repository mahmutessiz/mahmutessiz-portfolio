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

      <ul class="flex flex-col gap-2 px-6 py-4 sm:w-1/2">
        <li class="text-lg font-bold text-white/70">
          {{ projectData.projectName }}
        </li>
        <li class="-mt-2 pb-2">{{ projectData.projectDescription }}</li>
        <li>
          <span class="font-bold text-white/60">Tools & languages:</span> <br />
          {{ projectData.tools }}
        </li>
        <li>
          <br />
          <div class="flex flex-wrap gap-2">
            <a
              :href="projectData.linkGithub"
              target="_blank"
              class="flex w-fit items-center justify-center gap-1 rounded-md border px-2 text-white hover:text-white/80"
              >Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
                  clip-rule="evenodd"
                /></svg
            ></a>
            <a
              :href="projectData.linkBlog"
              target="_blank"
              v-if="projectData.linkBlog != ''"
              class="flex w-fit items-center justify-center gap-1 rounded-md border px-2 text-white hover:text-white/80"
            >
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M6 2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6Zm7 3.5a.5.5 0 0 1-.41.492L12.5 7h-5a.5.5 0 0 1-.09-.992L7.5 6h5a.5.5 0 0 1 .5.5Zm0 3.5a.5.5 0 0 1-.41.492l-.09.008h-5a.5.5 0 0 1-.09-.992L7.5 9.5h5a.5.5 0 0 1 .5.5Zm0 3.5a.5.5 0 0 1-.41.492L12.5 14h-5a.5.5 0 0 1-.09-.992L7.5 13h5a.5.5 0 0 1 .5.5Z"
                /></svg
            ></a>
            <a
              :href="projectData.linkDemo"
              target="_blank"
              class="flex w-fit items-center justify-center gap-1 rounded-md border px-2 text-white hover:text-white/80"
            >
              Live demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m16 8.4l-8.875 8.9q-.3.3-.713.3t-.712-.3q-.3-.3-.3-.713t.3-.712L14.6 7H7q-.425 0-.713-.288T6 6q0-.425.288-.713T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17q-.425 0-.713-.288T16 16V8.4Z"
                /></svg
            ></a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
