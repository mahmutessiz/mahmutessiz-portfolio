<script setup>
import BlogPostData from "@/data/BlogPostData.json";

const blogPostData = BlogPostData;
</script>

<template>
  <!-- cocktail Website -->

  <div
    class="m-auto flex max-w-[1440px] flex-col items-center justify-center bg-primary-bg-darkslategray px-4 py-12 text-primary-text-thistle md:w-2/3"
  >
    <img
      :src="blogPostData.cocktail.pictures[0]"
      class="m-auto w-full shadow-md shadow-black/50"
      :alt="blogPostData.cocktail.name"
    />
    <h1 class="mt-12 text-center text-3xl font-bold">
      {{ blogPostData.cocktail.name }}
    </h1>
    <br />
    <p>
      In this blog post, I will share with you a website that I created using
      Nuxt 3, TypeScript, Cocktail API, and TailwindCSS. The website is called
      Cocktail App and you can access it here:
      https://cocktail-app-umber.vercel.app/.

      <br />
      <br />
      Cocktail App is a website where you can search for cocktails by name and
      get information about various cocktails. You can learn how to make them,
      what are the ingredients, what are the measurements, and what are the
      instructions. You can also see a picture of each cocktail and its
      category, type, and glass.
      <br />
      <br />
      I created this website as my first Nuxt 3 project. Nuxt 3 is a hybrid Vue
      framework that allows us to use Vue 3 to build server-side rendered
      applications. Nuxt 3 is a modern rewrite of the Nuxt framework based on
      Vite, Vue 3, and Nitro with first-class TypeScript support. It offers many
      features that make web development simple and powerful, such as on-demand
      rendering, SEO and web vitals optimization, code-splitting, tree-shaking,
      link prefetching, payload extraction, and more.
      <br />
      <br />
      To create this website, I used the following technologies: <br />
      <br />
      1. Nuxt 3: The intuitive web framework that provides the core
      functionality of the website. <br />
      2. TypeScript: The programming language that adds static typing to
      JavaScript and helps with code quality and maintainability. <br />
      3. Cocktail API: The free API that provides data about cocktails, such as
      name, image, ingredients, measurements, instructions, category, type, and
      glass. <br />
      4. I installed vue-router using npm. This added the router module to the
      project. <br />
      5. TailwindCSS: The utility-first CSS framework that helps with styling
      the website with minimal custom CSS. <br />
      6. Unsplash: The source of some of the images on the landing page of the
      website.
      <br />
      <br />
      That's it! I was able to create this website in less than an hour using
      Vue.js and TailwindCSS. I learned a lot from this project and I enjoyed
      working with these technologies. I hope you liked this post and found it
      useful. If you have any questions or feedback, feel free to leave a
      comment below or contact me through the website. Thank you for reading!
    </p>

    <br />
    <p class="w-full">Thank you for reading!</p>
    <br />
    <img
      class="shadow-md shadow-black/50"
      :src="blogPostData.cocktail.pictures[1]"
      :alt="blogPostData.cocktail.name"
    />
  </div>
</template>
