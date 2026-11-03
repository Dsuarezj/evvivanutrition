# Evviva Nutrition

Evviva Nutrition website, migrated from WordPress to Astro.js, with Storyblok as CMS and deployed on Vercel.

**Live site:** https://www.evvivanutrition.com/

## Work done

- Migrated the site from WordPress to Astro.js.
- Adapted the template design and components to Evviva Nutrition's brand and content.
- Integrated Storyblok to manage pages, articles, and content blocks.
- Configured deployment on Vercel.

## Technologies

Astro.js, Storyblok, Tailwind CSS, and Vercel.

## Local development

Requires Node.js and access to the project's Storyblok space.

1. Install dependencies with `npm install`.
2. Create a `.env` file with `STORYBLOK_TOKEN` and the Storyblok space access token. Do not commit it.
3. Run `npm run dev`.

To enable Storyblok preview, add `STORYBLOK_IS_PREVIEW=yes` to the `.env` file. Without this option, the site is generated statically.

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with HTTPS. |
| `npm run build` | Builds the production version. |
| `npm run preview` | Previews the local production build. |

## Reviewer

- Denisse Suarez

## Credits

Based on the [Bigspring Light Astro template by Themefisher](https://github.com/themefisher/bigspring-light-astro), distributed under the MIT license. The original license notice is kept in [LICENSE](./LICENSE).
