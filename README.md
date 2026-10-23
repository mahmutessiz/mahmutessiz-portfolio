# Mahmut Eşsiz — Portfolio

A Vue 3 portfolio and blog built with the Composition API, Vue Router, Vite 8 and Tailwind CSS 4. Components with JavaScript use `<script setup>`; static components need no script block.

## Development

Use Node **22.13+ (22.x)**, **24+ (24.x)**, or **26+**. Node 24.12 is supported. The repository's `.nvmrc` selects Node 22.

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run lint
npm test
npm run build
```

`npm run lint:fix` applies ESLint fixes. `npm run format` formats source files. `npm run preview` previews the built site locally.

## Structure

- `src/components`: portfolio sections and blog content.
- `src/views`: route-level pages.
- `src/composables/useActiveSection.js`: section tracking, with observer cleanup on unmount.
- `src/data`: projects, screenshots and blog metadata.
- `src/router/index.js`: lazy page loading, titles and hash/history scrolling.

Gallery and blog views derive content from reactive route parameters, including when navigating between URLs that reuse the same component. Unknown content displays a fallback. Existing URLs, including `/galery/:id`, remain supported.

## Dokploy / Nixpacks

The pasted deployment failed because Node 18 cannot run the installed Vite toolchain. `nixpacks.toml` explicitly selects Node 22, installs build dependencies using `npm ci --include=dev`, builds `dist`, and runs `npm start`.

Use Nixpacks as the build provider and configure the domain's container port to **5173**. Remove any Dokploy environment override that still selects Node 18. The production server serves `dist` with SPA fallback, so refreshing blog and gallery URLs works. For static hosting, publish `dist` and rewrite unknown paths to `index.html`; `vercel.json` already supplies this for Vercel.

The `compression` override selects the patched release required by the production server's dependency tree.

The scoped `js-beautify` override keeps its `nopt` CLI parser on version 9 (and `abbrev` on version 4), which supports Node 24.12. Recheck this override when upgrading Node or the parent dependency.

Project blog buttons use relative Vue Router links so they stay on the current deployment. A Vercel `DEPLOYMENT_NOT_FOUND` page on `www.mahmutessiz.dev` requires correcting that domain's hosting assignment: attach it to an active Vercel deployment, or point its DNS at the current Dokploy server and configure the domain there. SPA rewrites cannot fix a missing deployment.
