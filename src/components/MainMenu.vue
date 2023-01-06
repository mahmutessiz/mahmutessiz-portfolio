<script>
export default {
  data() {
    return {
      navList: ["About Me", "Projects", "Contact", "Resume"],
      navListStyle:
        "font-bold hover:text-white active:text-white transition-all duration-500 cursor-pointer",
      ulStyles:
        "shadow-md mt-4 mb-4 flex justify-center gap-7 bg-primary-bg-black text-primary-text-thistle px-6 py-4 rounded-3xl",
    };
  },
};
</script>

<template>
  <header class="flex w-full justify-center bg-primary-bg-darkslategray">
    <nav>
      <ul :class="ulStyles">
        <li :class="navListStyle" v-for="navList in navList" :key="navList">
          {{ navList }}
        </li>
      </ul>
    </nav>
  </header>
</template>
