<script>
import pomodoro from "../images/pomodoro1.png";
import todo from "../images/todo.png";
import design1 from "../images/design1.png";
import design2 from "../images/design2.png";
import loomGym from "../images/loomgym.png";
export default {
  data() {
    return {
      lastStyle:
        "w-96 border border-solid border-primary-text-thistle text-primary-text-thistle md:w-full md:flex md:gap-4 md:rounded-lg overflow-hidden",
      itemStyle:
        "w-96 border border-solid border-primary-text-thistle text-primary-text-thistle md:rounded-lg overflow-hidden",
      itemStyle2:
        "w-full flex gap-4 border border-primary-text-thistle rounded text-primary-text-thistle md:rounded-lg overflow-hidden",
      ulItemOrderStyle: "flex flex-wrap items-center justify-center gap-4",
      listItemParagraphStyle: "",
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
          projectDescription:
            "This is a pomodoro app that help you to consantrate to do what you want in a given timespace.",
          github: "Github",
          demo: "Demo",
        },
        {
          key: "2",
          imageSrc: todo,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
          projectDescription: "Basic to-do app.",
          github: "Github",
          demo: "Demo",
        },
        {
          key: "3",
          imageSrc: loomGym,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
          projectDescription:
            "Unleash your full potential with our cutting-edge gym equipment and expert trainers. Join us now and see the difference for yourself.",
          github: "Github",
          demo: "Demo",
        },
        {
          key: "4",
          imageSrc: design1,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
          projectDescription:
            "A website landing page design. I did not use any animations etc. This is a dummy design. I'll improve this in the future.",
          github: "Github",
          demo: "Demo",
        },
        {
          key: "5",
          imageSrc: design2,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Deneme",
          projectDescription:
            "A website landing page design. I did not use any animations etc. This is a dummy design. I'll improve this in the future.",
          github: "Github",
          demo: "Demo",
        },
      ],
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

  <div class="relative box-border w-3/4 px-4">
    <ul :class="ulItemOrderStyle">
      <li :class="lastStyle" v-for="item in listIn" :key="item.key">
        <img
          :src="item.imageSrc"
          class="w-96 cursor-pointer transition-all duration-500"
          style="min-height: 16rem"
          alt=""
        />
        <div class="w-full bg-primary-bg-black px-4 text-center">
          <h3 :class="centeredProjectName">
            {{ item.projectName }}
            <hr />
          </h3>

          <ul :class="listItemParagraphStyle" class="text-left">
            <li>&nbsp; {{ item.projectDescription }}</li>
            <br />
            <li>Languages: vue.js, tailwind</li>
            <br />
            <li>
              Links:
              <a href="github.com" class="text-blue-400">{{ item.github }}</a> ,
              <a href="demo.co" class="text-blue-400">{{ item.demo }}</a>
            </li>
            <br />
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
