<script>
import thimage from "../images/email.png";
export default {
  data() {
    return {
      lastStyle: "w-full h-60 border rounded",
      listIn: [
        {
          key: "1",
          imageSrc: thimage,
        },
        { key: "2", imageSrc: thimage },
        { key: "3", imageSrc: thimage },
        { key: "4", imageSrc: thimage },
        { key: "5", imageSrc: thimage },
      ],
      itemStyle: "h-80 w-80 border-2 border-solid border-white",
      itemStyle2: "w-full h-60 border",
      ulItemOrderStyle: "flex flex-wrap items-center justify-center gap-4 py-9",
    };
  },
  methods: {
    change1() {
      return (this.lastStyle = this.itemStyle);
    },
    change2() {
      return (this.lastStyle = this.itemStyle2);
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

  <div class="w-3/4 border-white">
    <ul :class="ulItemOrderStyle">
      <li :class="lastStyle" v-for="item in listIn" :key="item.key">
        <img :src="item.imageSrc" class="w-1/2" alt="" />
        <div class="mt-8 h-32 w-full border bg-slate-400">
          <h3 class="text-center">Deneme</h3>
          <hr />
          <br />
          <p class="overflow-hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            incidunt officia unde, eos corporis tenetur totam
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
