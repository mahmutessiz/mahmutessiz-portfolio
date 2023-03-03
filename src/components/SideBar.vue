<script>
export default {
  data() {
    return {
      sideBarItems: {
        listStyles: "my-4 cursor-pointer transition-transform hover:rotate-12",
        asideStyles:
          "fixed top-44 left-4 flex w-14 items-center justify-center rounded-2xl bg-primary-bg-black py-10 px-2 shadow-lg shadow-black z-50",
      },
      rotation: true,
    };
  },
  methods: {
    openCloseSidebar(event) {
      if (this.rotation == true) {
        event.target.classList.add("rotate-90");
        const aside = document.querySelector("aside");
        aside.classList.remove("hidden");

        this.rotation = false;
      } else {
        event.target.classList.remove("rotate-90");

        const aside = document.querySelector("aside");
        aside.classList.add("hidden");
        this.rotation = true;
      }
    },
  },
};
</script>

<template>
  <button
    id="openButton"
    class="fixed top-28 left-4 z-50 w-fit rounded-full bg-primary-text-thistle px-4 py-2 text-lg opacity-60 transition-all duration-300 sm:hidden"
    @click="openCloseSidebar"
  >
    &#9776;
  </button>

  <aside :class="sideBarItems.asideStyles" class="hidden sm:block">
    <ul class="flex list-none flex-col">
      <li :class="sideBarItems.listStyles">
        <a href="https://github.com/mahmutessiz">
          <img src="../public/github.png" alt="Github" />
        </a>
      </li>
      <li :class="sideBarItems.listStyles">
        <a href="https://www.linkedin.com/in/mahmut-e%C5%9Fsiz-b1b8a8185/"
          ><img src="../public/linkedin.png" alt="linkedin" />
        </a>
      </li>

      <li :class="sideBarItems.listStyles">
        <a href="mailto:mahmutessiz72@gmail.com"
          ><img src="../public/email.png" alt="e-mail"
        /></a>
      </li>
    </ul>
  </aside>
</template>
