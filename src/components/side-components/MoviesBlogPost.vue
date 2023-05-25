<script setup>
import BlogPostData from "@/data/BlogPostData.json";

const blogPostData = BlogPostData;
</script>

<template>
  <!-- Movies Website -->

  <div
    class="m-auto flex max-w-[1440px] flex-col items-center justify-center bg-primary-bg-darkslategray px-4 py-12 text-primary-text-thistle md:w-2/3"
  >
    <img
      :src="blogPostData.movies.pictures[0]"
      class="m-auto w-full"
      alt="blogPostData.portfolio name"
    />
    <h1 class="mt-12 text-center text-3xl font-bold">
      {{ blogPostData.movies.name }}
    </h1>
    <br />
    <p>
      In this blog post, I will show you how I created a website that lets you
      explore new series and movies using some of the latest web technologies.
      The website is
      <a
        href="https://movies-app-blush-ten.vercel.app/"
        target="_blank"
        class="text-blue-500 underline"
        >Go to the website</a
      >
      and you can check out the source code on
      <a
        href="https://github.com/mahmutessiz/movies_app/tree/master/movies_app"
        target="_blank"
        class="text-blue-500 underline"
        >GitHub</a
      >.
    </p>
    <br />
    <p>
      The website uses Vue.js as the front-end framework, and leverages the
      Composition API to organize the logic and state of the components. The
      Composition API is a new feature in Vue 3 that allows you to use reactive
      data and methods in a more flexible and modular way than the Options API.
      You can learn more about it here:
      <a
        href="https://v3.vuejs.org/guide/composition-api-introduction.html"
        target="_blank"
        class="text-blue-500 underline"
        >https://v3.vuejs.org/guide/composition-api-introduction.html</a
      >
    </p>
    <br />
    <p>
      One of the main components of the website is the swiper, which displays a
      carousel of images for each category of movies or series. To implement the
      swiper, I used Swiper.js, a powerful and modern library for creating
      responsive and touch-friendly sliders. You can find more information about
      Swiper.js here:
      <a
        href="https://swiperjs.com/"
        target="_blank"
        class="text-blue-500 underline"
        >https://swiperjs.com</a
      >
    </p>
    <br />
    <p>
      To style the website, I used TailwindCSS, a utility-first CSS framework
      that provides a set of predefined classes for common design elements.
      TailwindCSS makes it easy to create responsive and customizable layouts
      without writing much CSS code. You can also use plugins and customizations
      to extend TailwindCSS with your own styles. You can learn more about
      TailwindCSS here:
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        class="text-blue-500 underline"
        >https://tailwindcss.com</a
      >
    </p>
    <br />
    <p>
      To make the website look more attractive and consistent, I also used
      DaisyUI, a component library that works on top of TailwindCSS and provides
      ready-made UI components such as buttons, cards, forms, etc. DaisyUI also
      supports different themes and color modes that you can switch with a
      single attribute. You can learn more about DaisyUI here:
      <a
        href="https://daisyui.com/"
        target="_blank"
        class="text-blue-500 underline"
        >https://daisyui.com</a
      >
    </p>
    <br />
    <p>
      To fetch data from the TMDB API, which is a popular service that provides
      information about movies and series, I used Axios, a promise-based HTTP
      client that works in both the browser and Node.js. Axios makes it easy to
      send requests and handle responses with different methods and options. You
      can learn more about Axios here:
      <a
        href="https://axios-http.com/"
        target="_blank"
        class="text-blue-500 underline"
        >https://axios-http.com</a
      >
    </p>
    <br />
    <p>
      To manage the global state of the website, such as the current category,
      page, and search query, I used Pinia, a state management library for Vue 3
      that is based on the Composition API. Pinia allows you to create stores
      that contain reactive state and actions, and access them from any
      component with hooks. Pinia also supports devtools integration,
      persistence, and SSR. You can learn more about Pinia here:
      <a
        href="https://pinia.esm.dev/"
        target="_blank"
        class="text-blue-500 underline"
        >https://pinia.esm.dev</a
      >
    </p>
    <br />
    <p>
      To handle routing between different pages of the website, such as the home
      page, the details page, and the search page, I used Vue Router, the
      official router for Vue.js that supports both hash mode and history mode.
      Vue Router allows you to define routes with dynamic segments and nested
      views, and control navigation with programmatic and declarative methods.
      You can learn more about Vue Router here:
      <a
        href="https://router.vuejs.org/"
        target="_blank"
        class="text-blue-500 underline"
        >https://router.vuejs.org</a
      >
    </p>
    <br />
    <p>
      As you can see, I used a lot of different technologies to create this
      website, but they all work well together and create a smooth and enjoyable
      user experience. I hope you liked this blog post and learned something new
      from it.
    </p>
    <br />
    <p class="w-full">Thank you for reading!</p>
    <br />
    <img :src="blogPostData.movies.pictures[1]" alt="" />
  </div>
</template>
