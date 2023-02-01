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
  methods: {
    /* bu fonksiyonun benzerini parent component ile yapmam gerekecek.
     propsları buradan sadece okuyabiliyorsam,
      paren component'den data atayıp oradan değerleri değiştirmeyi deneyebilirim. */
    deleteFunction() {
      console.log(this.displayState);
      let deletingContainerDiv = document.getElementById("bigdiv");
      let deletingContainerDiv2 = document.getElementById("closeDiv");

      if (this.displayState == "fixed") {
        deletingContainerDiv.classList.remove(this.displayState);
        deletingContainerDiv.classList.add("hidden");

        deletingContainerDiv2.classList.remove(this.displayState);
        deletingContainerDiv2.classList.add("hidden");
      }
    },
  },
};
</script>
<template>
  <!-- use position: fixed  -->
  <div
    :class="displayState"
    class="bottom-0 left-0 right-0 top-0 z-30 w-full overflow-hidden"
    id="bigdiv"
  >
    <div
      :class="displayState"
      class="top-0 bottom-0 right-0 left-0 z-40 bg-black bg-opacity-70 text-center"
      @click="deleteFunction"
      id="closeDiv"
    ></div>
    <div class="grid h-screen w-full flex-col place-items-center gap-4">
      <ul>
        <li
          class="flex w-full flex-wrap items-center justify-center gap-4 overflow-hidden py-9"
        >
          <img
            :src="ata.container"
            class="z-50 my-4 w-1/3 shadow-lg shadow-black transition-all duration-100 ease-in hover:scale-110"
            alt=""
            v-for="ata in imgSliderData"
            :key="ata"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
