<template>
  <div
    class="min-h-screen bg-gray-100 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-200"
  >
    <article class="mx-auto max-w-4xl p-6 md:p-10">
      <header class="mb-8">
        <h1
          class="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl dark:text-white"
        >
          Full-Stack Authentication: A Simple Guide to Nuxt, Hono, and Better
          Auth
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Setting up secure authentication can be a real headache. You have to
          manage sessions, hash passwords, handle cookies, and wire up your
          frontend and backend. But what if it could be simpler?
        </p>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          In this guide, we'll build a complete authentication system from
          scratch using a modern, super-fast stack:
        </p>
        <ul
          class="mt-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300"
        >
          <li>
            <strong>Backend</strong>:
            <strong class="font-semibold text-pink-500">Bun</strong> with
            <strong class="font-semibold text-pink-500">Hono</strong>, a fast
            and lightweight web framework.
          </li>
          <li>
            <strong>Frontend</strong>:
            <strong class="font-semibold text-sky-500">Nuxt.js</strong>, the
            intuitive Vue framework.
          </li>
          <li>
            <strong>Authentication</strong>:
            <strong class="font-semibold text-emerald-500">Better Auth</strong>,
            a library designed to make auth simple and secure.
          </li>
          <li>
            <strong>Database</strong>:
            <strong class="font-semibold text-amber-500">Drizzle ORM</strong>
            with SQLite for easy database management.
          </li>
        </ul>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
          By the end, you'll have a secure, full-stack application with sign-up,
          sign-in, sign-out, and protected routes. Let's dive in! 🚀
        </p>
      </header>

      <div
        class="my-8 rounded-r-lg border-l-4 border-sky-500 bg-sky-50 p-6 dark:bg-gray-800/50"
      >
        <summary>
          <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            Summary
          </h2>
          <ul
            class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300"
          >
            <li>
              Follow better-auth docs for Hono:
              <a
                href="https://www.better-auth.com/docs/integrations/hono"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sky-600 hover:underline dark:text-sky-400"
              >
                better-auth.com/docs/hono
              </a>
            </li>
            <li>
              Follow better-auth docs for Nuxt:
              <a
                href="https://www.better-auth.com/docs/integrations/nuxt"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sky-600 hover:underline dark:text-sky-400"
              >
                better-auth.com/docs/nuxt
              </a>
            </li>
            <li>
              Create an API route to get the session from the Hono backend.
            </li>
            <li>Use that route to get the user session in Nuxt.</li>
          </ul>
        </summary>

        <div class="mt-6">
          <h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
            Important Notes
          </h2>
          <ol
            class="list-inside list-decimal space-y-3 text-gray-700 dark:text-gray-300"
          >
            <li>
              <strong class="font-semibold text-gray-800 dark:text-gray-100"
                >Credentials:</strong
              >
              Always include
              <code
                class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
                >{ credentials: 'include' }</code
              >
              in your fetch requests to ensure cookies are sent with
              authentication requests.
            </li>
            <li>
              <strong class="font-semibold text-gray-800 dark:text-gray-100"
                >CORS:</strong
              >
              Make sure your Hono server is configured to allow credentials from
              your Nuxt frontend origin.
            </li>
            <li>
              <strong class="font-semibold text-gray-800 dark:text-gray-100"
                >Server vs. Client:</strong
              >
              Authentication checks should be performed on the client side in
              Nuxt, as the session cookie needs to be sent with each request.
            </li>
            <li>
              <strong class="font-semibold text-gray-800 dark:text-gray-100"
                >Session Refresh:</strong
              >
              Call
              <code
                class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
                >fetchSession()</code
              >
              when your app initializes or when users return to ensure their
              session status is up-to-date.
            </li>
            <li>
              <strong class="font-semibold text-gray-800 dark:text-gray-100"
                >Error Handling:</strong
              >
              Always implement proper error handling for authentication
              requests, as network issues or server errors can occur.
            </li>
          </ol>
        </div>
      </div>

      <hr class="my-12 border-t border-gray-300 dark:border-gray-700" />

      <section>
        <h2
          class="mb-8 border-l-4 border-pink-500 pl-4 text-3xl font-bold text-gray-900 dark:text-white"
        >
          Part 1: Building the Hono Backend 🛡️
        </h2>
        <p class="mb-8 text-lg text-gray-600 dark:text-gray-400">
          First, let's get our secure backend server up and running.
        </p>

        <div class="mb-12">
          <h3
            class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Step 1: Install the Dependencies
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            Create a new Bun project and install the necessary packages.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-bash">bun install hono better-auth @better-auth/drizzle-adapter drizzle-orm @libsql/client bcrypt dotenv</code></pre>
          <p class="mb-4 mt-4 text-gray-600 dark:text-gray-400">
            You'll also need Drizzle's command-line tool for migrations:
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-bash">bun install -d drizzle-kit</code></pre>
        </div>

        <div class="mb-12">
          <h3
            class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Step 2: Set Up Your Environment Variables
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            It's bad practice to hardcode secrets or configuration values in
            your code. We'll use a
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >.env</code
            >
            file to store them. Create a file named
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >.env</code
            >
            in the root of your backend project.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-ini"># .env

# A long, random string used to sign and encrypt session cookies.
BETTER_AUTH_SECRET="your_super_secret_and_long_random_string_here"

# The public-facing URL of this backend server.
BETTER_AUTH_URL="http://localhost:8787"

# The connection string for your database. For SQLite, it's a file path.
DATABASE_URL="file:main.db"

# The URL of your Nuxt frontend. This is a crucial security setting.
FRONTEND_ORIGIN="http://localhost:3000"</code></pre>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            <strong>Important</strong>: Remember to add the
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >.env</code
            >
            file to your
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >.gitignore</code
            >
            to keep your secrets out of version control!
          </p>
        </div>

        <div class="mb-12">
          <h3
            class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Step 3: Configure Drizzle and Better Auth
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            First, create a file to initialize your Drizzle client. This will
            read the
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >DATABASE_URL</code
            >
            from your
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >.env</code
            >
            file.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-typescript">// src/db/db.ts
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as dotenv from 'dotenv';

dotenv.config(); // Make environment variables available

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const client = createClient({ url: process.env.DATABASE_URL });
export const db = drizzle(client);

export default db;</code></pre>
          <p class="mb-4 mt-4 text-gray-600 dark:text-gray-400">
            Next, let's configure Better Auth in
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >src/lib/auth.ts</code
            >. This is the heart of our backend authentication.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-typescript">// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../db/db";
import * as schema from "../db/auth-schema"; // This file will be generated next
import * as dotenv from 'dotenv';

dotenv.config();

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: schema,
  }),
  // IMPORTANT: Trust requests only from our Nuxt frontend
  trustedOrigins: [process.env.FRONTEND_ORIGIN!],
  emailAndPassword: {
    enabled: true,
  },
  user: {
    deleteUser: {
      enabled: true,
    },
  },
});</code></pre>
        </div>

        <div class="mb-12">
          <h3
            class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Step 4: Generate the Database Schema
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            Now that our configuration is ready, we can ask Better Auth to
            generate the required database schema for users, sessions, etc.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-bash">bunx @better-auth/cli@latest generate</code></pre>
          <p class="mb-4 mt-4 text-gray-600 dark:text-gray-400">
            Next, configure Drizzle Kit to find this new schema file. Then, run
            the
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >push</code
            >
            command to create the tables in your database:
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-bash">bunx drizzle-kit push</code></pre>
        </div>

        <div class="mb-12">
          <h3
            class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Step 5: Create the Hono Server
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            In your main server file (e.g.,
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >src/index.ts</code
            >), we'll wire everything together.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-typescript">// src/index.ts
import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "./lib/auth"; // Import our config
import * as dotenv from 'dotenv';

dotenv.config();
const app = new Hono();

// 1. Configure CORS
app.use(
  "/api/auth/*",
  cors({
    origin: [process.env.FRONTEND_ORIGIN!], // Use variable from .env
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    credentials: true,
  })
);

// 2. Session Middleware
app.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  c.set("user", session?.user ?? null);
  c.set("session", session?.session ?? null);
  return next();
});

// 3. The Magic Auth Handler ✨
app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

// 4. The CRUCIAL /get-session Endpoint
app.get("/api/auth/get-session", async (c) => {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });
  return c.json(session ?? null);
});

// src/index.ts (continued)
export default {
  port: 8787,
  fetch: app.fetch,
}</code></pre>
          <div
            class="mt-6 rounded-r-lg border-l-4 border-amber-500 bg-amber-100 p-4 dark:bg-amber-900/30"
          >
            <p class="font-bold text-amber-800 dark:text-amber-300">
              Why is <code class="font-mono">/get-session</code> so important?
            </p>
            <p class="mt-2 text-amber-700 dark:text-amber-200">
              The session cookie that Better Auth sets is
              <strong class="font-semibold">HttpOnly</strong>. This is a vital
              security feature that prevents any client-side JavaScript from
              accessing it, protecting against XSS attacks. Because our Nuxt app
              <strong class="font-semibold"
                >cannot read the cookie directly</strong
              >, it needs a secure way to ask the backend, "Hey, is the user who
              sent this request logged in?". This endpoint serves as that secure
              bridge. The backend, which can read the cookie, validates it and
              sends back the user's data if the session is valid.
            </p>
          </div>
        </div>
      </section>

      <hr class="my-12 border-t border-gray-300 dark:border-gray-700" />

      <section>
        <h2
          class="mb-8 border-l-4 border-sky-500 pl-4 text-3xl font-bold text-gray-900 dark:text-white"
        >
          Part 2: Integrating with the Nuxt Frontend 🎨
        </h2>
        <p class="mb-8 text-lg text-gray-600 dark:text-gray-400">
          With the backend ready, let's build the frontend experience.
        </p>

        <div class="mb-12">
          <h3
            class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Step 5: Create the <code class="font-mono">useAuth</code> Composable
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            First, configure Nuxt to know our backend's URL. Add a
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >.env</code
            >
            file to your Nuxt project's root:
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-ini"># Nuxt .env file
NUXT_PUBLIC_API_URL="http://localhost:8787" # Your Hono server URL</code></pre>
          <p class="mb-4 mt-4 text-gray-600 dark:text-gray-400">
            Now, create the
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >useAuth</code
            >
            composable. This will be the central hub for all auth-related
            actions in our UI. It will call the
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >/api/auth/get-session</code
            >
            endpoint we just created to determine the user's status.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-typescript">// ~/composables/useAuth.ts
import { ref, computed } from "vue";

interface User { /* ... your user type ... */ }
interface Session { /* ... your session type ... */ }

export const useAuth = () => {
  const user = ref&lt;User | null&gt;(null);
  const loading = ref(true);

  const config = useRuntimeConfig();
  const API_URL = config.public.apiUrl;

  const isAuthenticated = computed(() => !!user.value);

  // This function asks our backend "who is logged in?"
  const fetchSession = async () => {
    loading.value = true;
    try {
      const data = await $fetch&lt;Session | null&gt;(`${API_URL}/api/auth/get-session`, {
        // IMPORTANT: This tells the browser to automatically send our secure HttpOnly cookie.
        credentials: "include",
      });
      user.value = data?.user ?? null;
    } catch (error) {
      // If the request fails (e.g., 401 Unauthorized), there's no valid session.
      user.value = null;
    } finally {
      loading.value = false;
    }
  };

  const signIn = async (email, password) => {
    await $fetch(`${API_URL}/api/auth/sign-in`, {
      method: "POST",
      credentials: "include",
      body: { email, password },
    });
    await fetchSession(); // After sign-in, ask the backend who we are now.
  };

  const signUp = async (name, email, password) => {
    await $fetch(`${API_URL}/api/auth/sign-up`, {
      method: "POST",
      credentials: "include",
      body: { name, email, password },
    });
    await fetchSession(); // Refresh session data
  };

  const signOut = async () => {
    await $fetch(`${API_URL}/api/auth/sign-out`, {
      method: "POST",
      credentials: "include",
    });
    user.value = null; // Clear user state immediately.
  };

  return { user, loading, isAuthenticated, fetchSession, signIn, signUp, signOut };
};</code></pre>
        </div>

        <div class="mb-12">
          <h3
            class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Step 6: Create the Login/Sign-Up Page
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            Now we can use our
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >useAuth</code
            >
            composable in any Vue component.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-html">&lt;!-- ~/pages/login.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;div v-if="loading"&gt;Checking session...&lt;/div&gt;
    
    &lt;div v-else-if="isAuthenticated"&gt;
      &lt;h1&gt;Welcome!&lt;/h1&gt;
      &lt;button @click="signOut"&gt;Sign Out&lt;/button&gt;
    &lt;/div&gt;

    &lt;div v-else&gt;
      &lt;form @submit.prevent="handleSignIn"&gt;
        &lt;h2&gt;Sign In&lt;/h2&gt;
        &lt;!-- Add inputs for email and password here --&gt;
        &lt;button type="submit"&gt;Sign In&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const { user, isAuthenticated, loading, signIn, signOut, fetchSession } = useAuth();

// Check the session when the component is first created.
onMounted(() => fetchSession());

// ... form state and submit handlers for sign in/up/out ...
&lt;/script&gt;</code></pre>
        </div>

        <div class="mb-12">
          <h3
            class="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100"
          >
            Step 7: Protect Your Routes 🔑
          </h3>
          <p class="mb-4 text-gray-600 dark:text-gray-400">
            You don't want just anyone accessing a user's dashboard. Nuxt
            middleware is the perfect tool. This middleware will run before
            navigating to a new page.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-typescript">// ~/middleware/auth.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuthenticated, fetchSession } = useAuth();

  // On every navigation, check with the backend for a valid session.
  await fetchSession();

  // If the backend says we're not logged in, redirect to the login page.
  if (!isAuthenticated.value) {
    return navigateTo('/login', { replace: true });
  }
});</code></pre>
          <p class="mb-4 mt-4 text-gray-600 dark:text-gray-400">
            Now, apply this middleware to any page you want to protect.
          </p>
          <pre
            class="overflow-x-auto rounded-lg bg-gray-200 p-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          ><code class="language-html">&lt;!-- ~/pages/dashboard.vue --&gt;
&lt;script setup lang="ts"&gt;
definePageMeta({
  middleware: "auth", // This is the magic line!
});
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Dashboard&lt;/h1&gt;
    &lt;p&gt;If you can see this, you are logged in!&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
        </div>
      </section>

      <hr class="my-12 border-t border-gray-300 dark:border-gray-700" />

      <footer class="mt-12">
        <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          Conclusion
        </h2>
        <p class="mb-4 text-lg text-gray-600 dark:text-gray-400">
          Voilà! You've successfully implemented a robust, full-stack
          authentication system.
        </p>
        <ul
          class="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300"
        >
          <li>
            Your
            <strong class="font-semibold text-pink-500">Hono backend</strong>
            securely manages users and sessions with the help of
            <strong class="font-semibold text-emerald-500">Better Auth</strong>,
            configured safely with environment variables.
          </li>
          <li>
            Your
            <strong class="font-semibold text-sky-500">Nuxt frontend</strong>
            communicates with a dedicated backend endpoint to securely check the
            user's status without ever needing to access the
            <code
              class="rounded-md bg-gray-200 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-700"
              >HttpOnly</code
            >
            cookie itself.
          </li>
        </ul>
        <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">
          This stack is not only powerful but also a joy to work with. You've
          laid a secure foundation, and you're now ready to build out the rest
          of your amazing application. Happy coding!
        </p>
      </footer>
    </article>
  </div>
</template>
