<script setup>
import BlogPostData from "@/data/BlogPostData.json";

const blogPostData = BlogPostData;
</script>

<template>
  <!-- quotes Website -->

  <div
    class="m-auto flex max-w-[1440px] flex-col items-center justify-center bg-primary-bg-darkslategray px-4 py-12 text-primary-text-thistle md:w-2/3"
  >
    <img
      :src="blogPostData.quotes.pictures[0]"
      class="m-auto w-full shadow-md shadow-black/50"
      :alt="blogPostData.quotes.name"
    />
    <h1 class="mt-12 text-center text-3xl font-bold">
      {{ blogPostData.quotes.name }}
    </h1>
    <br />
    <p>
      Hello and welcome to my website about quotes. This is a project that I
      created for learning about vue-router, vue js and tailwindcss. These are
      some of the popular technologies for building modern and responsive web
      applications.
    </p>
    <br />
    <p>
      In this website, you can find quotes based on categories such as love,
      motivation, wisdom and humor. You can also browse through all the quotes
      or select a random one. Each quote has a beautiful background and copy
      option when you click on that you can use to share it on social media.
    </p>
    <br />
    <p>
      The main purpose of this project was to learn how to use vue-router, which
      is a library that allows you to create dynamic routes for your web pages.
      Vue-router makes it easy to navigate between different components and pass
      data between them. It also supports nested routes, transitions, navigation
      guards and more.
    </p>
    <br />
    <p>
      Another thing that I learned from this project was how to use tailwindcss,
      which is a utility-first CSS framework that lets you style your elements
      without writing any custom CSS. Tailwindcss provides a lot of classes that
      you can apply to your HTML elements to control their appearance, layout,
      spacing, typography and responsiveness. It also allows you to customize
      the theme, add your own utilities and use plugins.
    </p>
    <br />
    <p>
      I also used vue js, which is a progressive framework for building user
      interfaces. Vue js is very easy to use and has a lot of features such as
      reactivity, components, directives, filters and computed properties. Vue
      js also has a great ecosystem of tools and libraries that you can use to
      enhance your web development experience.
    </p>
    <br />
    <p>
      I thought it would be difficult to create this website, but it turned out
      to be pretty easy. I learned a lot from this project and I hope you enjoy
      browsing through the quotes. If you have any feedback or suggestions,
      please feel free to contact me. Thank you for visiting my website!
    </p>
    <br />
    <p class="w-full">Thank you for reading!</p>
    <br />
    <img
      class="shadow-md shadow-black/50"
      :src="blogPostData.quotes.pictures[1]"
      :alt="blogPostData.quotes.name"
    />
  </div>
</template>
