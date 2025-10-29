# Codecarbon page

This is the landing page for Codecarbon.

# How to use

1. Install Node.js (via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
1. Install [pnpm](https://pnpm.io/) package manager.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Built using Astro

Feel free to check [Astro documentation](https://docs.astro.build).

## Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)

### Add contributors/sponsors

To add a new contributor, follow these steps:

1. Open the `src/content/contributors.ts` file.
2. Add a new object to the `contributors` array, following the existing schema. For example:

```ts
{
    name: "Your Name",
    job: "Your Job Title",
    organisation: "Your Organisation",
    img_path: "/assets/contributors/img/your_image.jpg"
},
```

3. Save the file and your changes will be reflected on the website.
