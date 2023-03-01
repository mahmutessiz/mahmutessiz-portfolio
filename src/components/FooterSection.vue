<script>
export default {
  data() {
    return {
      listStyle:
        "cursor-pointer transition-colors duration-300 hover:text-white",
      footerStyle:
        "flex flex-wrap w-full items-center justify-center gap-4 bg-primary-bg-black px-2 text-secondary-text-silver",
      copRight:
        "w-full bg-primary-bg-black py-4 text-center text-sm text-secondary-text-silver",
    };
  },
};
</script>

<template>
  <footer :class="footerStyle">
    <ul class="flex w-2/5 flex-wrap items-center justify-center gap-4">
      <li :class="listStyle">About</li>
      <li :class="listStyle">Projects</li>
      <li :class="listStyle">Contact</li>
      <li :class="listStyle">Resume</li>
    </ul>
    <ul class="flex w-2/5 flex-wrap items-center gap-2">
      <li class="text-center text-lg font-bold">Skils:</li>
      <br />
      <li :class="listStyle">HTML5/CSS3,</li>
      <li :class="listStyle">Vue js,</li>
      <li :class="listStyle">Tailwindcss,</li>
      <li :class="listStyle">Javascript</li>
    </ul>
  </footer>
  <p :class="copRight">Mahmut Eşsiz &copy;2023</p>
</template>
