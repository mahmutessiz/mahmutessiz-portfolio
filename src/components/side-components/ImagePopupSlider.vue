<script>
import SliderData from "../../data/SliderData.json";
export default {
  data() {
    return {
      imgStyles: "",
      imgData: SliderData[1],
      number: 50,
    };
  },

  /* xxxxxxxxx props are readonly xxxxxxxx */
  props: {
    bool: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  methods: {
    changeImg() {
      console.log(this.imgData);
      console.log(this.imageDataRender);
    },

    /* bu fonksiyonun benzerini parent component ile yapmam gerekecek.
     propsları buradan sadece okuyabiliyorsam,
      paren component'den data atayıp oradan değerleri değiştirmeyi deneyebilirim. */
    deneme() {
      if (this.bool == true) {
        this.imgData = SliderData[0];
        this.bool == false;
      } else if (this.bool == false) {
        this.imgData = SliderData[1];
        this.bool == true;
      } else {
        console.log(this.bool.value);
      }
      console.log(this.bool);
    },
  },
};
</script>
<template>
  <!-- use position: fixed  -->
  <div class="hidden bottom-0 left-0 right-0 top-0 z-50 w-full bg-slate-300">
    <div class="grid h-screen w-full flex-col place-items-center gap-4">
      <ul>
        <li
          class="flex w-full flex-row flex-nowrap items-center justify-center gap-4 overflow-hidden border border-black"
        >
          <img
            :src="ata.container"
            class="w-2/4 transition-all duration-500 ease-in"
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
        <button @click="deneme">{{ bool }} tıkla</button>
        <input type="radio" name="1" @click="changeImg" />
        <input type="radio" name="1" @click="changeImg" />
      </form>
    </div>
  </div>
</template>
