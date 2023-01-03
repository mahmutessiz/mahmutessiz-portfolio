<script>
export default {
  data() {
    return {
      sideBarItems: {
        listStyles: "my-6 transition-transform hover:rotate-12",
      },
    };
  },
};
</script>

<template>
  <aside
    class="fixed mt-40 ml-4 flex h-1/2 w-14 items-center justify-center rounded-2xl bg-primary-bg-black px-2 shadow-lg shadow-black"
  >
    <ul class="flex list-none flex-col">
      <li :class="sideBarItems.listStyles">
        <img src="../public/github(1).png" alt="Github" />
      </li>
      <li :class="sideBarItems.listStyles">
        <img src="../public/linkedin(2).png" alt="linkedin" />
      </li>
      <li :class="sideBarItems.listStyles">
        <img src="../public/twitter(1).png" alt="twitter" />
      </li>
    </ul>
  </aside>
</template>
