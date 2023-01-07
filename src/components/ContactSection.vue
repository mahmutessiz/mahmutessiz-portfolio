<template>
  <div
    class="flex h-screen flex-col items-center justify-center gap-4 bg-primary-bg-darkslategray"
  >
    <h2 class="text-3xl font-bold text-primary-text-thistle underline">
      Contact Form
    </h2>
    <form
      action="https://formsubmit.co/mmagmun@gmail.com"
      target="_blank"
      method="POST"
      class="mt-8 flex w-2/3 flex-row gap-4"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          placeholder=" Name"
          name="name"
          class="h-10 cursor-text border-b border-dashed bg-primary-bg-black text-secondary-text-silver"
          required
        />
        <input
          type="email"
          name="email"
          placeholder=" Your e-mail address"
          class="h-10 cursor-text border-b border-dashed bg-primary-bg-black text-secondary-text-silver"
          required
        />
        <input
          type="text"
          placeholder=" Subject"
          name="_subject"
          class="h-10 cursor-text border-b border-dashed bg-primary-bg-black text-secondary-text-silver"
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <textarea
          name="message"
          placeholder=" Your message"
          id=""
          cols="40"
          rows="10"
          class="resize-none bg-primary-bg-black text-secondary-text-silver shadow-md"
        ></textarea>
        <button
          class="cursor-pointer rounded-lg bg-primary-bg-black text-primary-text-thistle shadow-md"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
