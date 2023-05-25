<script setup>
import BlogPostData from "@/data/BlogPostData.json";

const blogPostData = BlogPostData;
</script>

<template>
  <!-- Portfolio Website -->

  <div
    class="m-auto flex max-w-[1440px] flex-col items-center justify-center bg-primary-bg-darkslategray px-4 py-12 text-primary-text-thistle md:w-2/3"
  >
    <img
      :src="blogPostData.portfolio.pictures[0]"
      class="m-auto w-full"
      alt="blogPostData.portfolio name"
    />
    <h1 class="mt-12 text-center text-3xl font-bold">
      {{ blogPostData.portfolio.name }}
    </h1>
    <br />
    <p>
      I am a web developer with a passion for creating beautiful and functional
      websites. My portfolio website, mahmutessiz.dev, is a great example of my
      skills. The website is well-designed, easy to navigate, and showcases my
      expertise in a variety of web development technologies.
    </p>
    <br />
    <p>
      The homepage of mahmutessiz.dev features a large, animated background
      image that sets the tone for the rest of the website. The navigation bar
      is located at the top of the page and makes it easy to find the different
      sections of the website. The main content area of the homepage is divided
      into three sections: About, Work, and Contact.
    </p>
    <br />
    <p>
      The About section provides a brief overview of my background and skills.
      The Work section showcases some of my recent projects, including websites,
      web applications, and mobile apps. The Contact section provides
      information on how to get in touch with me.
    </p>
    <br />
    <p>
      In addition to the homepage, mahmutessiz.dev also includes a number of
      other pages, including a blog, a portfolio, and a resume. The blog
      features articles about web development, design, and technology. The
      portfolio showcases my work in more detail. The resume provides a list of
      my skills and experience.
    </p>
    <br />
    <p>
      One of the things that I like most about my portfolio website is the way
      that I use it to showcase my skills and experience. The website is
      well-designed and easy to navigate, and it provides a clear overview of my
      work. I also appreciate the fact that I have included a blog on my
      website, where I share my thoughts on web development and technology. This
      gives potential clients and employers a chance to get to know me better
      and learn more about my work.
    </p>
    <br />
    <p>
      Overall, I think my portfolio website is a great example of my skills as a
      web developer. The website is well-designed, easy to navigate, and
      showcases my expertise in a variety of web development technologies. If
      you are looking for a web developer who can create beautiful and
      functional websites, I am a great option.
    </p>
    <br />
    <div class="flex w-full flex-col">
      <h2 class="pb-2 font-bold">
        Here are some other findings about my portfolio website:
      </h2>
      <ul class="list-disc">
        <li>
          The website is responsive, meaning that it looks good on all devices,
          including smartphones and tablets.
        </li>
        <li>
          The website is optimized for search engines, making it easier for
          people to find my work.
        </li>
        <li>
          The website is regularly updated with new content, keeping it fresh
          and interesting.
        </li>
      </ul>
      <br />

      <h2 class="pb-2 font-bold">
        Here are some of the technologies that I used to create my portfolio
        website:
      </h2>
      <ul class="list-disc">
        <li>vue js</li>
        <li>Vue-router</li>
        <li>TailwindCSS</li>
      </ul>
    </div>

    <br />
    <p class="w-full">Thank you for reading!</p>
    <br />
    <img
      class="shadow-md shadow-black/50"
      :src="blogPostData.portfolio.pictures[1]"
      alt=""
    />
  </div>
</template>
