<script>
import SliderData from "../../data/SliderData.json";
export default {
  data() {
    return {
      imgStyles: "",
      imgData: SliderData,
      number: 50,
    };
  },
  methods: {
    changeImg() {
      const imgPosition = document.querySelector("#image");
      this.number = this.number + 20;

      imgPosition.style.transform = `translateX(${this.number}rem)`;
      console.log(
        (imgPosition.style.transform = `translateX(${this.number}rem)`)
      );
    },
  },
};
</script>
<template>
  <!-- use position: fixed  -->
  <div
    class="bottom-0 left-0 right-0 top-0 z-50 hidden w-full place-items-center bg-slate-300"
  >
    <div class="grid w-full flex-col place-items-center gap-4 text-white">
      <ul>
        <li
          class="flex w-full flex-row flex-nowrap items-center justify-center gap-96 overflow-hidden border border-black"
        >
          <img
            :src="ata.container"
            class="translate w-2/4 transition-all duration-500 ease-in"
            alt=""
            id="image"
            :class="imgStyles"
            v-for="ata in imgData"
            :key="ata"
          />
        </li>
      </ul>

      <br />
      <form action="#">
        <input type="radio" name="1" @click="changeImg" />
        <input type="radio" name="1" @click="changeImg" />
        <input type="radio" name="1" @click="changeImg" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.translate {
  transform: translateX(-50rem);
}
</style>
