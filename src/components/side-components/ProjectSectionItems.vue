<script>
import pomodoro from "../images/pomodoro.png";
export default {
  data() {
    return {
      lastStyle: "w-full flex gap-4 text-white border rounded",
      itemStyle: "w-96 border-2 border-solid border-white",
      itemStyle2: "w-full flex gap-4 text-white border rounded",
      ulItemOrderStyle: "flex flex-wrap items-center justify-center gap-4 py-9",
      listItemParagraphStyle: "list-disc px-2",
      centeredProjectName: "p-3 text-center text-lg font-bold",

      listIn: [
        {
          key: "1",
          imageSrc: pomodoro,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
        },
        {
          key: "2",
          imageSrc: pomodoro,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
        },
        {
          key: "3",
          imageSrc: pomodoro,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
        },
        {
          key: "4",
          imageSrc: pomodoro,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
        },
        {
          key: "5",
          imageSrc: pomodoro,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
        },
      ],
    };
  },
  methods: {
    change1() {
      this.lastStyle = this.itemStyle;
      this.listItemParagraphStyle = "hidden";
      this.centeredProjectName =
        "z-10 -translate-y-36 p-3 text-center text-lg font-bold backdrop-blur-lg backdrop-filter";
    },
    change2() {
      this.lastStyle = this.itemStyle2;
      this.listItemParagraphStyle = "list-disc px-2";
      this.centeredProjectName = "p-3 text-center text-lg font-bold";
    },
  },
};
</script>

<template>
  <!-- xxxxxxxxxxx  BUTTONS xxxxxxxxxxxxx -->

  <ul class="mt-4 flex items-end justify-end gap-4 p-6">
    <li class="cursor-pointer" @click="change2">
      <img
        class="h-12 hover:scale-110 active:scale-110"
        src="../public/Extended.png"
        alt=""
      />
    </li>
    <li class="cursor-pointer" @click="change1">
      <img
        class="m-1 h-12 hover:scale-110 active:scale-110"
        src="../public/rect.png"
        alt=""
      />
    </li>
  </ul>

  <!-- xxxxxxxxxxxx  ITEMS xxxxxxxxxxxx -->

  <div
    class="relative box-border w-3/4 rounded-lg border border-primary-text-thistle px-4"
  >
    <ul :class="ulItemOrderStyle">
      <li :class="lastStyle" v-for="item in listIn" :key="item.key">
        <img
          :src="item.imageSrc"
          class="w-96 cursor-pointer transition-all duration-500"
          alt=""
        />
        <div class="w-full bg-primary-bg-black text-center">
          <h3 :class="centeredProjectName">
            {{ item.projectName }}
          </h3>

          <ul :class="listItemParagraphStyle">
            <li class="text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              incidunt officia unde, eos corporis tenetur totam
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
