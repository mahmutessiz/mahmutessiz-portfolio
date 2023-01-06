<template>
  <div
    class="flex h-screen flex-col items-center justify-center gap-4 bg-primary-bg-darkslategray"
  >
    <h2 class="text-3xl font-bold text-primary-text-thistle underline">
      Contact Form
    </h2>
    <form action="" class="mt-8 flex w-2/3 flex-col gap-4">
      <input
        type="text"
        placeholder=" Name Lastname"
        class="h-10 cursor-text border-b border-dashed bg-primary-bg-black text-secondary-text-silver"
        required
      />
      <input
        type="email"
        placeholder=" Your e-mail address"
        class="h-10 cursor-text border-b border-dashed bg-primary-bg-black text-secondary-text-silver"
        required
      />
      <input
        type="text"
        placeholder=" Subject"
        class="h-10 cursor-text border-b border-dashed bg-primary-bg-black text-secondary-text-silver"
        required
      />
      <textarea
        name=""
        placeholder=" Your message"
        id=""
        cols="30"
        rows="10"
        class="resize-none bg-primary-bg-black text-secondary-text-silver"
      ></textarea>
      <button
        class="cursor-pointer rounded-lg bg-primary-bg-black text-primary-text-thistle"
      >
        Send
      </button>
    </form>
  </div>
</template>
