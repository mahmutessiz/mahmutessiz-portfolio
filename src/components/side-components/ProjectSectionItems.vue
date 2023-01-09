<script>
export default {
  data() {
    return {
      deneme: "w-full h-60 border",
      listIn: ["1", "2", "3", "4", "5"],
      itemStyle: "h-80 w-80 border-2 border-solid border-white",
      itemStyle2: "w-full h-60 border",
      ulItemOrderStyle2:
        "flex flex-wrap flex-col items-center justify-center gap-4 py-9",
      ulItemOrderStyle: "flex flex-wrap items-center justify-center gap-4 py-9",
    };
  },
  methods: {
    change1() {
      return (this.deneme = this.itemStyle);
    },
    change2() {
      return (this.deneme = this.itemStyle2);
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

  <div class="w-2/3 border-white">
    <ul :class="ulItemOrderStyle">
      <li :class="deneme" v-for="item in listIn" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
