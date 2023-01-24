<script>
import ProjectData from "@/data/ProjectData.json";

export default {
  data() {
    return {
      projectData: ProjectData,

      lastStyle:
        "w-96 border border-solid border-primary-text-thistle text-primary-text-thistle md:w-full md:flex md:gap-4 md:rounded-lg overflow-hidden",
      itemStyle:
        "w-96 border border-solid border-primary-text-thistle text-primary-text-thistle md:rounded-lg overflow-hidden",
      itemStyle2:
        "w-full flex gap-4 border border-primary-text-thistle rounded text-primary-text-thistle md:rounded-lg overflow-hidden",
      ulItemOrderStyle: "flex flex-wrap items-center justify-center gap-4",
      listItemParagraphStyle: "",
      centeredProjectName: "p-3 text-center text-lg font-bold",
    };
  },
  methods: {
    change1() {
      this.lastStyle = this.itemStyle;
      this.listItemParagraphStyle = "md:list-disc px-4";
    },
    change2() {
      this.lastStyle = this.itemStyle2;
      this.listItemParagraphStyle = "list-disc px-2";
      this.centeredProjectName = "p-3 text-center text-lg font-bold";
    },
  },
  created() {
    this.listItemParagraphStyle = "md:list-disc px-2";
  },
};
</script>

<template>
  <!-- xxxxxxxxxxx  BUTTONS xxxxxxxxxxxxx -->

  <ul class="mt-8 hidden items-end justify-end gap-4 p-6 md:mt-4 md:flex">
    <li class="cursor-pointer" @click="change2">
      <img
        class="h-12 hover:scale-110 active:scale-110"
        src="Extended.png"
        alt=""
      />
    </li>
    <li class="cursor-pointer" @click="change1">
      <img
        class="m-1 h-12 hover:scale-110 active:scale-110"
        src="rect.png"
        alt=""
      />
    </li>
  </ul>

  <!-- xxxxxxxxxxxx  ITEMS xxxxxxxxxxxx -->

  <div class="relative box-border w-3/4 px-4">
    <ul :class="ulItemOrderStyle">
      <li :class="lastStyle" v-for="data in projectData" :key="data.key">
        <img
          :src="data.imageSrc"
          class="w-96 cursor-pointer transition-all duration-500"
          style="min-height: 16rem"
          alt=""
        />
        <div class="w-full bg-primary-bg-black px-4 text-center">
          <h3 :class="centeredProjectName">
            {{ data.projectName }}
            <hr />
          </h3>

          <ul :class="listItemParagraphStyle" class="text-left">
            <li>&nbsp; {{ data.projectDescription }}</li>
            <br />
            <li>Languages: vue.js, tailwind</li>
            <br />
            <li>
              Links:
              <a href="github.com" class="text-blue-400">{{ data.github }}</a> ,
              <a href="demo.co" class="text-blue-400">{{ data.demo }}</a>
            </li>
            <br />
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
