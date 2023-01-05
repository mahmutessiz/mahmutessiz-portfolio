<script>
export default {
  data() {
    return {
      sideBarItems: {
        listStyles: "my-4 transition-transform hover:rotate-12",
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
        <img src="../public/github(1).png" alt="Github" />
      </li>
      <li :class="sideBarItems.listStyles">
        <img src="../public/linkedin(2).png" alt="linkedin" />
      </li>
      <li :class="sideBarItems.listStyles">
        <img src="../public/email.png" alt="e-mail" />
      </li>
      <li :class="sideBarItems.listStyles">
        <img src="../public/twitter(1).png" alt="twitter" />
      </li>
    </ul>
  </aside>
</template>
