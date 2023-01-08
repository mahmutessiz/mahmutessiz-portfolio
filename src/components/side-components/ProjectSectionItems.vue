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
