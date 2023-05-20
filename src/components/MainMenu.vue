<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      RouterLink,
      currentSection: "home",
    };
  },
  watch: {
    currentSection(newValue) {
      if (newValue == "home") {
        document.querySelector(".home").classList.add("text-white");
        document.querySelector(".project").classList.remove("text-white");
        document.querySelector(".contact").classList.remove("text-white");
      } else if (newValue == "project") {
        document.querySelector(".project").classList.add("text-white");
        document.querySelector(".home").classList.remove("text-white");
        document.querySelector(".contact").classList.remove("text-white");
      } else {
        document.querySelector(".contact").classList.add("text-white");
        document.querySelector(".project").classList.remove("text-white");
        document.querySelector(".home").classList.remove("text-white");
      }
    },
  },
  mounted() {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this.currentSection = entry.target.id;
          }
        });
      },
      { rootMargin: "-10% 0px -30% 0px", root: null }
    );
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
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
          <RouterLink
            to="/"
            class="home transition-all duration-300 focus:text-white active:text-white"
            >Home</RouterLink
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white focus:text-white active:text-white"
        >
          <a href="#project" class="project transition-all duration-300"
            >Projects</a
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white focus:text-white active:text-white"
        >
          <a href="#contact" class="contact transition-all duration-300"
            >Contact</a
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white focus:text-white active:text-white"
        >
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
