# KIIT HacktoberFest 🌟

### A React Website built with Gatsby (v2) and TypeScript along with good SEO and PWA support.

### [View Website](https://kiithacktoberfest.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/60c326c6-4f03-432e-bca7-3c216b97938b/deploy-status)](https://app.netlify.com/sites/kiithacktoberfest/deploys)

This website is built with the following integrations:

-   **TypeScript** for type-safe code.
-   **Styled-Components** for all your styles.
-   **modern-css-reset** for a reset of sensible default styles.
-   **gatsby-image and gatsby-transformer-sharp** for optimized images.
-   **gatsby-plugin-manifest / SEO component** for an SEO-friendly PWA.
-   **Jest and React Testing library** for snapshots and unit tests.
-   **gatsby-plugin-catch-links** for avoiding the browser having to refresh the whole page when navigating between local pages.
-   **ESLint with an emphasis on functional patterns (with Prettier and TypeScript integration)** to make your code look its best.
-   **React Axe and React A11y for accessibility** so that your site is awesome for everyone.

## Installation

You will need to have `node` and `npm` installed on your computer.

You can either use `npx` or install the `gatsby-cli` globally.

The `npx` way:

```sh
npx gatsby new kiit-hacktoberfest https://github.com/S-ayanide/gatsby-starter-typescript-seo-grand
```

or the global way:

```sh
npm i -g gatsby-cli
gatsby new kiit-hacktoberfest https://github.com/S-ayanide/gatsby-starter-typescript-seo-grand
```

## Usage

To start the development servers:

```sh
npm run develop
```

If all was successful, you should see links to two development servers in the Node terminal. You can open these url in any browser that you would like.

1. [http://localhost:8080](http://localhost:8080):

This is the development server that allows you to preview your website. It comes with hot-module reloading, which means that you should see your changes almost immediately without having to refresh the browser tab.

2. [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql):

This is the development server that allows you to interact with the your site's GraphQL data via the GraphiQL IDE.

### Available Scripts

| Script       | Description                                                                         |
| ------------ | :---------------------------------------------------------------------------------- |
| `dev`        | Start the development server with hot module reloading.                             |
| `format`     | Format your code with Prettier.                                                     |
| `clean`      | Delete the `.cache` and `public` directories.                                       |
| `test`       | Run your Jest tests once.                                                           |
| `test:watch` | Run your Jest tests in watch mode.                                                  |
| `lint`       | Lint your code with ESLint.                                                         |
| `lint:watch` | Lint your code with ESLint in watch mode.                                           |
| `lint:fix`   | Lint your code with ESLint and attempt to fix linting issues.                       |
| `serve`      | Serve the production build of your site for testing.                                |
| `build`      | Compile your application and make it ready for deployment                           |
| `update`     | Updates the package.json to the latest dependency versions using npm-check-updates. |

## Deployment

Lint your files and fix all linting issues.

```sh
npm run lint
```

Run your test suite and fix any broken tests.

```sh
npm run test
```

Compile a production build to the `/public` directory.

```sh
npm run build
```

😀
