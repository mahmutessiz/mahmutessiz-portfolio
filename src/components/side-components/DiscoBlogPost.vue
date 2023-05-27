<script setup>
import BlogPostData from "@/data/BlogPostData.json";

const blogPostData = BlogPostData;
</script>

<template>
  <!-- disco Website -->

  <div
    class="m-auto flex max-w-[1440px] flex-col items-center justify-center bg-primary-bg-darkslategray px-4 py-12 text-primary-text-thistle md:w-2/3"
  >
    <img
      :src="blogPostData.disco.pictures[0]"
      class="m-auto w-full shadow-md shadow-black/50"
      :alt="blogPostData.disco.name"
    />
    <h1 class="mt-12 text-center text-3xl font-bold">
      {{ blogPostData.disco.name }}
    </h1>
    <br />
    <p>
      Hello everyone, welcome to my blog. In this post, I want to share with you
      how I built my first website using Vue.js and TailwindCSS. You can check
      out the website here: https://product-website-one.vercel.app/. <br />
      Vue.js is a progressive framework for building user interfaces. It is easy
      to learn and has a lot of features that make web development fun and
      productive. TailwindCSS is a utility-first CSS framework that lets you
      style your elements without writing any custom CSS. It has a lot of
      classes that you can use to create beautiful and responsive layouts.
      <br />
      <br />
      I decided to create this website as a learning project. I wanted to learn
      more about vue-router, which is a plugin for Vue.js that allows you to
      create single-page applications with dynamic routing. I also wanted to
      learn more about daisyUI, which is a plugin for TailwindCSS that adds
      ready-made components and themes. Finally, I wanted to learn more about
      vanilla-tilt.js, which is a library that creates a 3D tilt effect on your
      elements. <br />
      <br />
      The website is very basic. It has four pages: Home, About, Products and
      Contact. The Home page has a hero section with a title and a button that
      links to the Products page. The About page has some information about me
      and my skills. The Products page has a grid of cards that showcase some of
      the products I have created. The Contact page has a form that lets you
      send me a message. <br />
      <br />
      To create the website, I followed these steps: <br />
      1. I created a new Vue project using the Vue CLI. This set up the basic
      structure and configuration of the project. <br />
      2. I installed TailwindCSS and daisyUI using npm. This added the necessary
      dependencies and files to the project. <br />
      3. I configured TailwindCSS and daisyUI in the tailwind.config.js file.
      This enabled the plugins and set the theme for the website. <br />
      4. I installed vue-router using npm. This added the router module to the
      project. <br />
      5. I created four components for each page: Home.vue, About.vue,
      Products.vue and Contact.vue. These components contain the HTML and CSS
      code for each page. <br />
      6. I created a router.js file that defines the routes for each page. This
      file imports the components and maps them to their corresponding paths.
      <br />
      7. I imported the router module in the main.js file and added it to the
      Vue instance. This enabled the routing functionality for the website.
      <br />
      8. I created a App.vue component that serves as the root component for the
      website. This component contains the navigation bar and the router-view
      element that renders the current page. <br />
      9. I installed vanilla-tilt.js using npm. This added the library to the
      project. <br />
      10. I imported vanilla-tilt.js in the Products.vue component and
      initialized it on the card elements. This added the 3D tilt effect to the
      cards. <br />
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
      :src="blogPostData.disco.pictures[1]"
      :alt="blogPostData.disco.name"
    />
  </div>
</template>
