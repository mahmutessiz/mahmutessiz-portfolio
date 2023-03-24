<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      RouterLink,
      navList: [
        { id: 1, text: "Home", href: "/" },
        { id: 2, text: "Projects", href: "/#project" },
        { id: 3, text: "Contact", href: "/#contact" },
        { id: 4, text: "Resume", href: "/" },
      ],
    };
  },
};
</script>

<template>
  <header class="flex w-full justify-center bg-primary-bg-darkslategray">
    <nav>
      <ul
        class="mt-4 mb-4 flex justify-center gap-4 rounded-3xl bg-primary-bg-black px-6 py-4 text-xs text-primary-text-thistle shadow-md sm:gap-7 sm:text-base"
      >
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white"
        >
          <RouterLink to="/" class="focus:text-white active:text-white"
            >Home</RouterLink
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white"
        >
          <a href="#project">Projects</a>
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white"
        >
          <a href="#contact">Contact</a>
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white"
        >
          <a href="/">Resume</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
