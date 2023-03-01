<script>
export default {
  data() {
    return {
      sideBarItems: {
        listStyles: "my-4 cursor-pointer transition-transform hover:rotate-12",
        asideStyles:
          "fixed top-44 left-4 flex w-14 items-center justify-center rounded-2xl bg-primary-bg-black py-10 px-2 shadow-lg shadow-black z-50",
        rotation: true,
      },
    };
  },
  methods: {
    openSidebar() {
      const element = document.querySelector("#openButton");
      const element2 = document.querySelector("#closeButton");
      element.classList.add("hidden");
      element2.classList.remove("hidden");

      const aside = document.querySelector("aside");
      aside.classList.remove("hidden");
    },
    closeSidebar() {
      const element = document.querySelector("#openButton");
      const element2 = document.querySelector("#closeButton");
      element2.classList.add("hidden");
      element.classList.remove("hidden");

      const aside = document.querySelector("aside");
      aside.classList.add("hidden");
    },
  },
};
</script>

<template>
  <button
    id="openButton"
    class="fixed top-28 left-4 z-50 w-fit rounded-full bg-primary-text-thistle px-4 py-2 text-lg opacity-60 sm:hidden"
    @click="openSidebar"
  >
    &#9776;
  </button>

  <button
    id="closeButton"
    class="fixed top-28 left-4 z-50 hidden w-fit rotate-90 rounded-full bg-primary-text-thistle px-4 py-2 text-lg opacity-60 sm:hidden"
    @click="closeSidebar"
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
