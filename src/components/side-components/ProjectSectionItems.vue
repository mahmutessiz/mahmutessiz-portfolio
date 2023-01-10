<script>
export default {
  data() {
    return {
      lastStyle: "w-full h-60 border rounded",
      listIn: [
        {
          key: "1",
          imageSrc: "../images/email.png",
        },
        { key: "2", imageSrc: "../images/email.png" },
        { key: "3", imageSrc: "../images/email.png" },
        { key: "4", imageSrc: "../images/email.png" },
        { key: "5", imageSrc: "../images/email.png" },
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

  <div class="w-2/3 border-white">
    <ul :class="ulItemOrderStyle">
      <li :class="lastStyle" v-for="item in listIn" :key="item.key">
        {{ item.key }}
        <img :src="item.imageSrc"  alt="" />
      </li>
    </ul>
  </div>
</template>
