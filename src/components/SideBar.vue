<script>
export default {
  data() {
    return {
      sideBarItems: {
        listStyles: "my-4 cursor-pointer transition-transform hover:rotate-12",
        asideStyles:
          "fixed top-[39%] left-[80%] md:top-[29%] md:left-4 flex w-14 items-center justify-center rounded-2xl bg-primary-bg-black py-10 px-2 shadow-lg shadow-black z-50",
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
    type="button"
    id="openButton"
    class="fixed top-[85%] left-[85%] z-50 w-fit rounded-full bg-primary-text-thistle px-2 py-1 text-lg opacity-50 shadow-lg transition-all duration-300 md:hidden"
    @click="openCloseSidebar"
  >
    &#9776;
  </button>

  <aside :class="sideBarItems.asideStyles" class="hidden md:block">
    <ul class="flex list-none flex-col">
      <li :class="sideBarItems.listStyles">
        <a
          href="https://github.com/mahmutessiz"
          class="text-primary-text-thistle"
          title="CV"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path
                d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"
              />
              <path
                d="M11 12.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0m2-4.5l1.5 6l1.5-6"
              />
            </g>
          </svg>
        </a>
      </li>
      <li :class="sideBarItems.listStyles">
        <a href="https://github.com/mahmutessiz">
          <img src="../assets/github_1.webp" alt="Github" title="Github" />
        </a>
      </li>
      <li :class="sideBarItems.listStyles">
        <a href="https://www.linkedin.com/in/mahmut-e%C5%9Fsiz-b1b8a8185/"
          ><img
            src="../assets/linkedin_1.webp"
            alt="linkedin"
            title="linkedin"
          />
        </a>
      </li>

      <li :class="sideBarItems.listStyles">
        <a href="mailto:mahmutessiz72@gmail.com"
          ><img src="../assets/email_1.webp" alt="e-mail" title="e-mail"
        /></a>
      </li>
    </ul>
  </aside>
</template>
