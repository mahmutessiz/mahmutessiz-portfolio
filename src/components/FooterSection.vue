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
  <footer class="relative bottom-0 h-auto w-auto bg-primary-bg-black p-4">
    <div class="md:mx-12 lg:mx-28 lg:mt-3 lg:flex lg:justify-between">
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
          Social Media
        </h3>
        <div class="">
          <div class="flex lg:items-center">
            <div class="lg:container lg:max-w-screen-lg">
              <div>
                <div class="gap-4 lg:flex lg:flex-wrap">
                  <a href="">
                    <button
                      class="inline-flex items-center space-x-2 rounded font-semibold"
                    >
                      <img
                        src="../public/github.png"
                        class="w-9 transition-transform duration-300 hover:rotate-12"
                        alt="github"
                      />
                    </button>
                  </a>
                  <a href="">
                    <button
                      class="inline-flex items-center space-x-2 rounded font-semibold"
                    >
                      <img
                        src="../public/linkedin.png"
                        class="w-9 transition-transform duration-300 hover:rotate-12"
                        alt="github"
                      />
                    </button>
                  </a>
                  <a href="">
                    <button
                      class="inline-flex items-center space-x-2 rounded font-semibold"
                    >
                      <img
                        src="../public/email.png"
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
      <div class="mb-4 lg:mt-3">
        <h3 class="mb-2 font-bold text-secondary-text-silver lg:mb-2">
          Navigate
        </h3>
        <div class="columns-2 md:columns-3 lg:columns-2">
          <a class="text-secondary-text-silver" href="">Navigate 0</a><br />
          <a href="" class="text-secondary-text-silver">Navigate 1</a><br />
          <a class="text-secondary-text-silver" href="">Navigate 2</a><br />
          <a class="text-secondary-text-silver" href="">Navigate 3</a><br />
          <a href="" class="text-secondary-text-silver">Navigate 4</a><br />
          <a href="" class="text-secondary-text-silver">Navigate 5</a><br />
        </div>
      </div>
    </div>
    <div>
      <div class="mt-2 flex justify-center">
        <p class="text-gray-400">Mahmut Eşsiz &copy; 2023</p>
      </div>
    </div>
  </footer>
</template>
