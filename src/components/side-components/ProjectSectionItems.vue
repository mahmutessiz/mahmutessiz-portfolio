<script>
import projectData from "@/data/ProjectData.json";
import imagePopupSlider from "@/components/side-components/ImagePopupSlider.vue";

import SliderData from "../../data/SliderData.json";

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
        "w-96 border border-solid border-primary-text-thistle text-primary-text-thistle md:rounded-lg overflow-hidden h-fit",
      itemStyle2:
        "w-full flex gap-4 border border-primary-text-thistle rounded text-primary-text-thistle md:rounded-lg overflow-hidden",
      ulItemOrderStyle: "flex flex-wrap items-center justify-center gap-4",
      listItemParagraphStyle: "",
      centeredProjectName: "p-3 text-lg font-bold text-primary-text-thistle",

      /* xxxxxxx data for imagePopupSlider xxxxxxxx */

      imagePopupSliderData: {
        project1: SliderData[0],
        sliderDisplayState: "hidden",
      },
      /* xxxxxxx end of data for imagePopupSlider xxxxxxxx */
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
    /* xxxxxxxx burada liste kendi konumunu buluyor xxxxxxxxxxxx */
    imagesGalery(event) {
      if (event.target.id == 0) {
        this.imagePopupSliderData.project1 = SliderData[0];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }

      if (event.target.id == 1) {
        this.imagePopupSliderData.project1 = SliderData[1];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }
      if (event.target.id == 2) {
        this.imagePopupSliderData.project1 = SliderData[2];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }
      if (event.target.id == 3) {
        this.imagePopupSliderData.project1 = SliderData[3];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }
      if (event.target.id == 4) {
        this.imagePopupSliderData.project1 = SliderData[4];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }
    },
    deleteFunction() {
      this.imagePopupSliderData.sliderDisplayState = "hidden";
    },
  },
  created() {
    this.listItemParagraphStyle = "md:list-disc px-2";
  },
};
</script>

<template>
  <!-- xxxxxxxxxxxxxx  Images collage xxxxxxxxxxxxxx -->

  <div
    :class="imagePopupSliderData.sliderDisplayState"
    class="top-0 bottom-0 right-0 left-0 z-20 bg-black bg-opacity-70 text-center backdrop-blur-sm"
    @click="deleteFunction"
    id="closeDiv"
  ></div>
  <imagePopupSlider
    :imgSliderData="imagePopupSliderData.project1"
    :displayState="imagePopupSliderData.sliderDisplayState"
  />

  <!-- xxxxxxxxxxxxxx end of Images collage & start of buttons section xxxxxxxxxxxxxx -->

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

  <div class="relative box-border w-11/12 px-4 md:w-3/4">
    <ul :class="ulItemOrderStyle">
      <li :class="lastStyle" v-for="data in projectData" :key="data.key">
        <!-- xxxxxxxxx GET İMAGES FROM A LİNK xxxxxxxxxx  -->
        <div class="grid aspect-video max-w-sm place-items-center">
          <!-- xxxxxxxxxxx konsola bak alt ile sırasını bulabiliyorum resmin xxxxxxxxxx -->
          <img
            :src="data.imageSrc"
            @click="imagesGalery"
            class="aspect-video cursor-pointer transition-all duration-500 md:p-2"
            style="min-height: 16rem"
            :id="data.key"
            alt="Project image"
          />
        </div>

        <div class="flex w-full flex-col items-center bg-primary-bg-black">
          <div class="w-full pl-16 text-left">
            <h3 :class="centeredProjectName">
              {{ data.projectName }}
            </h3>
          </div>

          <ul
            :class="listItemParagraphStyle"
            class="w-3/4 text-left text-secondary-text-silver"
          >
            <li>{{ data.projectDescription }}</li>
            <br />
            <li>
              Languages:
              <span class="font-thin italic text-primary-text-thistle">{{
                data.tools
              }}</span>
            </li>
            <br />
            <li>
              Links:
              <a
                :href="data.linkGithub"
                target="_blank"
                class="text-sm text-primary-text-thistle"
                >{{ data.github }}</a
              >
              <a
                v-if="data.linkBlog != ''"
                :href="data.linkBlog"
                target="_blank"
                class="text-sm text-primary-text-thistle"
              >
                , {{ data.blog }}</a
              >
              <a
                :href="data.linkDemo"
                target="_blank"
                class="text-sm text-primary-text-thistle"
              >
                , {{ data.demo }}</a
              >
            </li>
            <br />
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
