<script>
export default {
  data() {
    return {
      sideBarItems: {
        listStyles: "my-4 cursor-pointer transition-transform hover:rotate-12",
        asideStyles:
          "fixed mt-40 ml-4 flex w-14 items-center justify-center rounded-2xl bg-primary-bg-black py-10 px-2 shadow-lg shadow-black",
      },
    };
  },
};
</script>

<template>
  <aside :class="sideBarItems.asideStyles">
    <ul class="flex list-none flex-col">
      <li :class="sideBarItems.listStyles">
        <a href="https://github.com/mahmutessiz">
          <img src="github.png" alt="Github" />
        </a>
      </li>
      <li :class="sideBarItems.listStyles">
        <a href="https://www.linkedin.com/in/mahmut-e%C5%9Fsiz-b1b8a8185/"
          ><img src="linkedin.png" alt="linkedin" />
        </a>
      </li>

      <li :class="sideBarItems.listStyles">
        <a href="mailto:mahmutessiz72@gmail.com"
          ><img src="email.png" alt="e-mail"
        /></a>
      </li>
    </ul>
  </aside>
</template>
