<script>
export default {
  components: {},
};
</script>
<template>
  <header
    class="sticky -top-1 flex w-full justify-center bg-primary-bg-darkslategray"
  >
    <nav>
      <ul
        class="mt-4 mb-4 flex justify-center gap-4 rounded-3xl bg-primary-bg-black px-6 py-4 text-xs text-primary-text-thistle shadow-md sm:gap-7 sm:text-base"
      >
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white"
        >
          <RouterLink to="/" class="focus:text-white active:text-white"
            >Home</RouterLink
          >
        </li>
        <li
          class="cursor-pointer font-bold transition-all duration-500 hover:text-white"
        >
          <a href="/">Resume</a>
        </li>
      </ul>
    </nav>
  </header>

  <!-- copied code -->

  <div
    class="bg-primary-bg-black px-4 py-14 text-secondary-text-silver xl:px-4"
  >
    <div class="container mx-auto md:px-9">
      <span role="contentinfo">
        <h1
          tabindex="0"
          class="text-center text-3xl tracking-wider focus:outline-none lg:text-5xl"
        >
          Somethings about my projects
        </h1>
      </span>
      <div
        tabindex="0"
        aria-label="Group of cards"
        class="mt-12 focus:outline-none lg:mt-24"
      >
        <div
          class="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2"
        >
          <div tabindex="0" class="focus:outline-none" aria-label="card 1">
            <img
              role="img"
              aria-label="code editor"
              tabindex="0"
              class="w-full focus:outline-none"
              src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png"
              alt="code editor"
            />
            <div
              class="rounded-bl-3xl rounded-br-3xl bg-primary-bg-darkslategray px-10 py-6"
            >
              <h2
                tabindex="0"
                class="headerColor text-4xl font-semibold tracking-wider focus:outline-none"
              >
                Transactions
              </h2>
              <p
                tabindex="0"
                class="mt-6 w-11/12 text-base tracking-wide focus:outline-none lg:text-lg lg:leading-8"
              >
                Find the latest events updates or create events, concerts,
                conferences, workshops, exhibitions, and cultural events in all
                cities of the US. The aim of Eventistan is to promote healthy
                and entertaining event.Find the latest events updates or create
                events, concerts, conferences, workshops, exhibitions, and
                cultural events in all cities of the US. The aim of Eventistan
                is to promote healthy and entertaining event.
              </p>
              <div class="flex w-full justify-end">
                <button
                  class="mt-4 flex cursor-pointer items-center justify-end ring-offset-2 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                  <span class="text-base tracking-wide text-indigo-500"
                    >Read more</span
                  >
                  <svg
                    class="ml-3 text-indigo-700 lg:ml-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1 8.53662H19"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="h-5 w-2"></div>
            </div>
          </div>
          <div>
            <div
              class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
            >
              <div tabindex="0" class="focus:outline-none" aria-label="card 2">
                <img
                  tabindex="0"
                  role="img"
                  aria-label="gaming"
                  class="w-full focus:outline-none"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                  alt="games"
                />

                <div
                  class="rounded-bl-3xl rounded-br-3xl bg-primary-bg-darkslategray px-3 py-4 lg:px-6"
                >
                  <h2
                    tabindex="0"
                    class="headerColor text-lg font-semibold tracking-wider focus:outline-none"
                  >
                    Transactions
                  </h2>
                  <p
                    tabindex="0"
                    class="mt-2 pr-4 text-sm tracking-wide focus:outline-none lg:text-base lg:leading-8"
                  >
                    Find the latest events updates or create events, concerts,
                    conferences, workshops...
                  </p>
                </div>
              </div>
              <div tabindex="0" class="focus:outline-none" aria-label="card 3">
                <img
                  tabindex="0"
                  role="img"
                  aria-label="gaming"
                  class="w-full focus:outline-none"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png"
                  alt="notes"
                />

                <div
                  class="rounded-bl-3xl rounded-br-3xl bg-primary-bg-darkslategray px-3 py-4 lg:px-6"
                >
                  <h2
                    tabindex="0"
                    class="headerColor text-lg font-semibold tracking-wider focus:outline-none"
                  >
                    Transactions
                  </h2>
                  <p
                    tabindex="0"
                    class="mt-2 pr-4 text-sm tracking-wide focus:outline-none lg:text-base lg:leading-8"
                  >
                    Find the latest events updates or create events, concerts,
                    conferences, workshops...
                  </p>
                </div>
              </div>
            </div>

            <div
              class="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
            >
              <div tabindex="0" class="focus:outline-none" aria-label="card 4">
                <img
                  tabindex="0"
                  role="img"
                  aria-label="laptop"
                  class="w-full focus:outline-none"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png"
                  alt="laptop"
                />

                <div
                  class="rounded-bl-3xl rounded-br-3xl bg-primary-bg-darkslategray px-3 py-4 lg:px-6"
                >
                  <h2
                    tabindex="0"
                    class="headerColor text-lg font-semibold tracking-wider focus:outline-none"
                  >
                    Transactions
                  </h2>
                  <p
                    tabindex="0"
                    class="mt-2 pr-4 text-sm tracking-wide focus:outline-none lg:text-base lg:leading-8"
                  >
                    Find the latest events updates or create events, concerts,
                    conferences, workshops...
                  </p>
                </div>
              </div>
              <div tabindex="0" class="focus:outline-none" aria-label="card 5">
                <img
                  tabindex="0"
                  role="img"
                  aria-label="worker"
                  class="w-full focus:outline-none"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png"
                  alt="worker"
                />
                <div
                  class="rounded-bl-3xl rounded-br-3xl bg-primary-bg-darkslategray px-3 py-4 lg:px-6"
                >
                  <h2
                    tabindex="0"
                    class="headerColor text-lg font-semibold tracking-wider focus:outline-none"
                  >
                    Transactions
                  </h2>
                  <p
                    tabindex="0"
                    class="mt-2 pr-4 text-sm tracking-wide focus:outline-none lg:text-base lg:leading-8"
                  >
                    Find the latest events updates or create events, concerts,
                    conferences, workshops...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.headerColor {
  @apply text-primary-text-thistle;
}
</style>
