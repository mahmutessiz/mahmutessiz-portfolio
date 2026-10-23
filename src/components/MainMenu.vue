<script setup>
import { RouterLink } from "vue-router";
import { useActiveSection } from "../composables/useActiveSection";
const currentSection = useActiveSection(["home", "project", "contact"]);
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
            :class="{ 'text-white': currentSection === 'home' }"
            class="home transition-all duration-300 focus:text-white active:text-white"
            >Home</RouterLink
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white focus:text-white active:text-white"
        >
          <a
            href="#project"
            :class="{ 'text-white': currentSection === 'project' }"
            class="project transition-all duration-300"
            >Projects</a
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white focus:text-white active:text-white"
        >
          <a
            href="#contact"
            :class="{ 'text-white': currentSection === 'contact' }"
            class="contact transition-all duration-300"
            >Contact</a
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white focus:text-white active:text-white"
        >
          <RouterLink to="/blog">Blog</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
