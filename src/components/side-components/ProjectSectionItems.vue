<script>
import pomodoro from "@/public/pomodoro1.png";
import todo from "@/public/todo.png";
import design1 from "@/public/design1.png";
import loomgym from "@/public/loomgym-mini-poster.png";
import design2 from "@/public/design2.png";

export default {
  data() {
    return {
      projectData: [
        {
          key: "1",
          imageSrc: pomodoro,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Pomodoro Website",
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
          projectName: "To-do list app",
          projectDescription: "Basic to-do app.",
          github: "Github",
          demo: "Demo",
        },
        {
          key: "3",
          imageSrc: loomgym,
          descriptionContainerStyle:
            "w-full border bg-primary-bg-darkslategray py-4 text-primary-text-thistle",
          projectImgStyle:
            "w-full cursor-pointer transition-all duration-500 hover:opacity-80",
          projectName: "Loom GYM website",
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
          projectName: "A landing page",
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
          projectName: "A landing page",
          projectDescription:
            "A website landing page design. I did not use any animations etc. This is a dummy design. I'll improve this in the future.",
          github: "Github",
          demo: "Demo",
        },
      ],

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
        <div class="grid aspect-video place-items-center px-2 pt-1 max-w-screen-sm">
          <img
            :src="data.imageSrc"
            class="cursor-pointer object-cover transition-all duration-500"
            style="min-height: 16rem"
            alt=""
          />
        </div>

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
