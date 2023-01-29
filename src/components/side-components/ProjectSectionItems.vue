<script>
import projectData from "@/data/ProjectData.json";
import imagePopupSlider from "@/components/side-components/ImagePopupSlider.vue";

export default {
  components: {
    imagePopupSlider,
  },
  data() {
    return {
      projectData,
      lastStyle:
        "w-96 border border-solid rounded sm:mt-8 border-primary-text-thistle text-primary-text-thistle md:w-full md:flex md:gap-4 md:rounded-lg overflow-hidden",
      itemStyle:
        "w-96 border border-solid border-primary-text-thistle text-primary-text-thistle md:rounded-lg overflow-hidden h-128",
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
  <!-- xxxxxxxxxxxxxx  SLİDER xxxxxxxxxxxxxx -->

  <imagePopupSlider />

  <!-- xxxxxxxxxxx  BUTTONS xxxxxxxxxxxxx -->

  <ul class="mt-8 hidden items-end justify-end gap-4 p-6 md:mt-4 md:flex">
    <li class="cursor-pointer" @click="change2">
      <img
        class="h-12 hover:scale-110 active:scale-110"
        src="../../public/Extended.png"
        alt=""
      />
    </li>
    <li class="cursor-pointer" @click="change1">
      <img
        class="m-1 h-12 hover:scale-110 active:scale-110"
        src="../../public/rect.png"
        alt=""
      />
    </li>
  </ul>

  <!-- xxxxxxxxxxxx  ITEMS xxxxxxxxxxxx -->

  <div class="relative box-border w-3/4 px-4">
    <ul :class="ulItemOrderStyle">
      <li
        :class="lastStyle"
        class=""
        v-for="data in projectData"
        :key="data.key"
      >
        <!-- xxxxxxxxx GET İMAGES FROM A LİNK xxxxxxxxxx  -->
        <div class="grid aspect-video max-w-sm place-items-center">
          <img
            :src="data.imageSrc"
            class="cursor-pointer object-cover transition-all duration-500"
            style="min-height: 16rem"
            alt=""
          />
        </div>

        <div class="flex w-full flex-col items-center bg-primary-bg-black">
          <h3 :class="centeredProjectName">
            {{ data.projectName }}
            <hr />
          </h3>

          <ul :class="listItemParagraphStyle" class="w-3/4 text-left">
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
