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
  <footer class="relative w-full bg-primary-bg-black p-4">
    <div
      class="flex flex-wrap gap-4 md:mx-12 lg:mx-28 lg:mt-3 lg:flex lg:justify-between"
    >
      <div class="mb-4 w-96 lg:columns-1">
        <p class="mb-1 mt-3 font-bold text-secondary-text-silver">About</p>
        <p class="text-sm text-secondary-text-silver">
          I am a fan of chess and strategy video games. I enjoy the challenge of
          thinking ahead and planning my moves carefully. Chess and strategy
          video games help me develop my logical and analytical skills, as well
          as my creativity and problem-solving abilities. I find these
          activities stimulating and rewarding.
        </p>
      </div>
      <div class="mb-4 lg:mt-3">
        <h3 class="mb-2 font-bold text-secondary-text-silver lg:mb-4">
          Social Media & Contact
        </h3>
        <div class="">
          <div class="flex lg:items-center">
            <div class="lg:container lg:max-w-screen-lg">
              <div>
                <div class="flex gap-4 lg:flex lg:flex-wrap">
                  <a href="https://github.com/mahmutessiz" target="_blank">
                    <button
                      class="inline-flex items-center space-x-2 rounded font-semibold"
                    >
                      <img
                        src="../assets/github.png"
                        class="w-9 transition-transform duration-300 hover:rotate-12"
                        alt="github"
                      />
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahmut-e%C5%9Fsiz-b1b8a8185/"
                    target="_blank"
                  >
                    <button
                      class="inline-flex items-center space-x-2 rounded font-semibold"
                    >
                      <img
                        src="../assets/linkedin.png"
                        class="w-9 transition-transform duration-300 hover:rotate-12"
                        alt="github"
                      />
                    </button>
                  </a>
                  <a href="mailto:mahmutessiz71@gmail.com" target="_blank">
                    <button
                      class="inline-flex items-center space-x-2 rounded font-semibold"
                    >
                      <img
                        src="../assets/email.png"
                        class="w-9 transition-transform duration-300 hover:rotate-12"
                        alt="github"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 ml-4 lg:mt-3">
        <h3 class="mb-2 font-bold text-secondary-text-silver lg:mb-2">
          Navigate
        </h3>
        <div class="columns-2 md:columns-3 lg:columns-2">
          <a class="text-secondary-text-silver" href="#">Home</a><br />
          <RouterLink to="/blog" class="text-secondary-text-silver"
            >Blog</RouterLink
          ><br />
          <a class="text-secondary-text-silver" href="#project">Projects</a
          ><br />
          <a class="text-secondary-text-silver" href="#contact">Contact</a
          ><br />
        </div>
      </div>
    </div>
    <div>
      <div class="mt-4 flex justify-center">
        <p class="text-gray-400">Mahmut Eşsiz &copy; 2023</p>
      </div>
    </div>
  </footer>
</template>
