<template>
  <div
    class="flex h-screen flex-col items-center justify-center gap-4 bg-primary-bg-darkslategray"
    id="contact"
  >
    <h2 class="text-3xl font-bold text-primary-text-thistle underline">
      Contact Form
    </h2>
    <form
      action="https://formsubmit.co/mmagmun@gmail.com"
      target="_blank"
      method="POST"
      class="mt-8 flex w-full flex-col items-center justify-center gap-4 px-8 sm:px-4"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          placeholder=" Name"
          name="name"
          class="h-10 w-[20rem] cursor-text border-b border-solid bg-primary-bg-black text-secondary-text-silver sm:w-[21rem]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder=" e-mail address"
          class="h-10 w-[20rem] cursor-text border-b border-solid bg-primary-bg-black text-secondary-text-silver sm:w-[21rem]"
          required
        />
        <input
          type="text"
          placeholder=" Subject"
          name="_subject"
          class="h-10 w-[20rem] cursor-text border-b border-solid bg-primary-bg-black text-secondary-text-silver sm:w-[21rem]"
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
          type="submit"
          about="blank"
          class="cursor-pointer rounded-lg bg-primary-bg-black py-4 text-primary-text-thistle shadow-md hover:scale-95 hover:shadow-lg"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
