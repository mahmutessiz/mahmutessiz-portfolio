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
          <img src="../public/github(1).png" alt="Github" />
        </a>
      </li>
      <li :class="sideBarItems.listStyles">
        <a href="https://www.linkedin.com/in/mahmut-e%C5%9Fsiz-b1b8a8185/"
          ><img src="../public/linkedin(2).png" alt="linkedin" />
        </a>
      </li>

      <li :class="sideBarItems.listStyles">
        <a href="mailto:mahmutessiz72@gmail.com"
          ><img src="../public/email.png" alt="e-mail"
        /></a>
      </li>
      <!--   <li :class="sideBarItems.listStyles">
        <a href="">
          <img src="../public/twitter(1).png" alt="twitter" />
        </a>
      </li> -->
    </ul>
  </aside>
</template>
