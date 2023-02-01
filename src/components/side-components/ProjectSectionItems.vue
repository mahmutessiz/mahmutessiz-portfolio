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
        "w-96 border border-solid border-primary-text-thistle text-primary-text-thistle md:rounded-lg overflow-hidden h-128",
      itemStyle2:
        "w-full flex gap-4 border border-primary-text-thistle rounded text-primary-text-thistle md:rounded-lg overflow-hidden",
      ulItemOrderStyle: "flex flex-wrap items-center justify-center gap-4",
      listItemParagraphStyle: "",
      centeredProjectName: "p-3 text-center text-lg font-bold",

      /* xxxxxxx data for imagePopupSlider xxxxxxxx */

      imagePopupSliderData: {
        project1: SliderData[0],
        sliderDisplayState: "hidden",
      },
      bool: true,
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
      console.log(event.target.id);
      console.log(event.target.alt);
      console.log(this.bool);

      if (event.target.alt == 0 && this.bool == true) {
        this.imagePopupSliderData.project1 = SliderData[0];
        this.imagePopupSliderData.sliderDisplayState = "fixed";

        this.bool = false;
      } else {
        this.imagePopupSliderData.sliderDisplayState = "hidden";
        this.bool = true;
      }

      if (event.target.alt == 1) {
        this.imagePopupSliderData.project1 = SliderData[1];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }
      if (event.target.alt == 2) {
        this.imagePopupSliderData.project1 = SliderData[2];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }
      if (event.target.alt == 3) {
        this.imagePopupSliderData.project1 = SliderData[3];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }
      if (event.target.alt == 4) {
        this.imagePopupSliderData.project1 = SliderData[4];
        this.imagePopupSliderData.sliderDisplayState = "fixed";
      }
    },
  },
  created() {
    this.listItemParagraphStyle = "md:list-disc px-2";
  },
};
</script>

<template>
  <!-- xxxxxxxxxxxxxx  SLİDER xxxxxxxxxxxxxx -->

  <imagePopupSlider
    :imgSliderData="imagePopupSliderData.project1"
    :displayState="imagePopupSliderData.sliderDisplayState"
  />

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

  <div class="relative box-border w-11/12 px-4 md:w-3/4">
    <ul :class="ulItemOrderStyle">
      <li :class="lastStyle" v-for="data in projectData" :key="data.key">
        <!-- xxxxxxxxx GET İMAGES FROM A LİNK xxxxxxxxxx  -->
        <div class="grid aspect-video max-w-sm place-items-center">
          <!-- xxxxxxxxxxx konsola bak alt ile sırasını bulabiliyorum resmin xxxxxxxxxx -->
          <img
            :src="data.imageSrc"
            id="deneme"
            @click="imagesGalery"
            class="cursor-pointer object-cover transition-all duration-500 md:p-2"
            style="min-height: 16rem"
            :alt="data.key"
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
