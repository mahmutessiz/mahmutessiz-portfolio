<script>
export default {
  /* xxxxxxxxx props are readonly xxxxxxxx */
  props: {
    imgSliderData: {
      required: false,
    },
    displayState: {
      type: String,
      required: false,
    },
  },
};
</script>
<template>
  <ul
    :class="displayState"
    class="top-1/4 z-30 grid h-2/3 w-full place-items-center overflow-auto border py-9 shadow-lg lg:top-16 lg:h-3/4 xl:h-4/5"
  >
    <li class="flex flex-wrap items-center justify-center gap-4">
      <img
        :src="ata.container"
        class="z-50 my-4 w-1/3 shadow-lg shadow-black transition-all duration-100 ease-in hover:scale-110 md:w-1/4"
        alt=""
        v-for="ata in imgSliderData"
        :key="ata"
      />
    </li>
  </ul>
</template>
