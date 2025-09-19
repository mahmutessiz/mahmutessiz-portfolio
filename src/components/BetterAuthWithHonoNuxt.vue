<template>
  <div
    class="group mx-auto max-w-sm transform overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="block">
      <!-- Image -->
      <img
        src="../assets/better-auth-hono-bun-nuxt.png"
        alt="Placeholder"
        class="h-48 w-full object-cover"
      />

      <div class="p-6">
        <div class="mb-4 flex items-start justify-between">
          <div class="rounded-lg bg-sky-100 p-3 dark:bg-sky-900/50">
            <svg
              class="h-6 w-6 text-sky-500 dark:text-sky-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <div class="flex flex-wrap justify-end gap-2">
            <span
              class="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              better-auth
            </span>
            <span
              class="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              Hono/bun
            </span>
            <span
              class="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-300"
            >
              Nuxt
            </span>
          </div>
        </div>

        <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Full-Stack Authentication with Nuxt, Hono, and Better Auth
        </h3>

        <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          A simple guide to building a complete and secure authentication system
          using a modern, super-fast stack.
        </p>
      </div>

      <div class="px-6 pb-5 pt-3">
        <button
          type="button"
          @click="router.push('/better-auth-hono-nuxt')"
          class="text-sm font-semibold text-sky-600 group-hover:underline dark:text-sky-400"
        >
          Read More →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
