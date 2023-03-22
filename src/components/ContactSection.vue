<template>
  <div class="mt-52 h-screen w-full bg-primary-bg-darkslategray" id="contact">
    <div
      class="h-96 bg-gradient-to-b from-primary-bg-darkslategray to-primary-bg-darkslategray"
    ></div>
    <div class="mx-auto mb-12 max-w-5xl px-6 sm:px-6 lg:px-8">
      <div class="-mt-72 w-full rounded bg-primary-bg-black p-8 shadow sm:p-12">
        <p class="text-center text-3xl font-bold leading-7 text-white">
          Contact me
        </p>
        <form
          action="https://formsubmit.co/mmagmun@gmail.com"
          target="_blank"
          method="POST"
        >
          <div class="mt-12 items-center md:flex">
            <div class="flex w-full flex-col md:w-1/2">
              <label class="font-semibold leading-none text-gray-300"
                >Name</label
              >
              <input
                type="text"
                name="name"
                class="mt-4 rounded border-0 bg-gray-800 p-3 leading-none text-gray-50 focus:border-blue-700 focus:outline-none"
                required
              />
            </div>
            <div class="mt-4 flex w-full flex-col md:ml-6 md:mt-0 md:w-1/2">
              <label class="font-semibold leading-none text-gray-300"
                >E-mail</label
              >
              <input
                name="email"
                type="email"
                class="mt-4 rounded border-0 bg-gray-800 p-3 leading-none text-gray-50 focus:border-blue-700 focus:outline-none"
                required
              />
            </div>
          </div>
          <div class="mt-8 items-center md:flex">
            <div class="flex w-full flex-col">
              <label class="font-semibold leading-none text-gray-300"
                >Subject</label
              >
              <input
                type="text"
                name="_subject"
                class="mt-4 rounded border-0 bg-gray-800 p-3 leading-none text-gray-50 focus:border-blue-700 focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <div class="mt-8 flex w-full flex-col">
              <label class="font-semibold leading-none text-gray-300"
                >Message</label
              >
              <textarea
                type="text"
                name="message"
                class="mt-4 h-40 rounded border-0 bg-gray-800 p-3 text-base leading-none text-gray-50 focus:border-blue-700 focus:outline-none"
                required
              ></textarea>
            </div>
          </div>
          <div class="flex w-full items-center justify-center">
            <button
              class="mt-9 rounded bg-primary-bg-darkslategray py-4 px-10 font-semibold leading-none text-white hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
