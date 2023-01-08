<script>
export default {
  data() {
    return {
      itemStyle: "h-80 w-80 border-2 border-solid border-white",
    };
  },
};
</script>

<template>
  <ul class="mt-4 flex items-end justify-end gap-4 p-6">
    <li class="cursor-pointer">
      <img class="h-12 hover:scale-110" src="../public/Extended.png" alt="" />
    </li>
    <li class="cursor-pointer">
      <img class="m-1 h-12 hover:scale-110" src="../public/rect.png" alt="" />
    </li>
  </ul>

  <div class="w-2/3 border-white">
    <ul class="flex flex-wrap items-center justify-center gap-4 py-9">
      <li :class="itemStyle"></li>
      <li :class="itemStyle"></li>
      <li :class="itemStyle"></li>
      <li :class="itemStyle"></li>
      <li :class="itemStyle"></li>
    </ul>
  </div>
</template>
