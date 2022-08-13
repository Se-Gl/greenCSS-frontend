# greenCSS - write design with this zero emission

[![Prettier and ESLint Code Base](https://github.com/Se-Gl/greenCSS-frontend/actions/workflows/lint.yml/badge.svg)](https://github.com/Se-Gl/greenCSS-frontend/actions/workflows/lint.yml)
[![Cypress Base](https://github.com/Se-Gl/greenCSS-frontend/actions/workflows/cypress.yml/badge.svg)](https://github.com/Se-Gl/greenCSS-frontend/actions/workflows/cypress.yml)
![check-code-coverage](https://img.shields.io/badge/code--coverage-82.89%25-green)

⚠️ merged repo from [omenCSS](https://github.com/Se-Gl/omenCSS-frontend) - @ commit 435

## Getting Started

Install the dependencies

```bash
# install all dependencies
npm i

# ⚠️ If error, install husky and cypress manually
npm install husky --save-dev
npm install --save-dev cypress
```

Run the development server:

```bash
# start the localhost server and cypress
npm run e2e

# backup
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### cypress commands

```bash
# open cypress GUI
npm run cypress:open
# run all cypress tests in the console
npm run cypress:run
# manually get code coverage
npx nyc report --reporter=text-summary
npx update-badge
```

### esLint commands

```bash
# default nextjs eslint command
npm run lint
# fix eslint errors by running prettier
npm run prettier
```

### env file

Create a `.env.local` file. Sendgrid will be used for the contact features.

```env
NODE_ENV=development
PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_API=http://localhost:8000/api
NEXT_PUBLIC_API_URL=http://localhost:8000/api
SENDGRID_API_KEY=YOUR-SENDGRID-API-KEY
SENDGRID_MAILING_ID=YOUR-SENDGRID-CONTACT-LIST-ID
SENDGRID_EMAIL=YOUR-SENDGRID-EMAIL
NEXT_PUBLIC_GOOGLE_ANALYTICS=YOUR-GOOGLE-ANALYTICS-KEY
NEXT_PUBLIC_STRIPE_KEY=YOUR-PUBLIC-STRIPE-KEY
STRIPE_SECRET_KEY=YOUR-SECRET-STRIPE-KEY
NEXT_PUBLIC_MAPBOX_KEY=YOUR-MAPBOX-KEY
PUBLIC_BACKEND_URL=http://localhost:8000 || YOUR URL POINTING TO YOUR BACKEND
```

- [sendgrid](https://signup.sendgrid.com/)
- [STRIPE](https://dashboard.stripe.com)

### Github actions

- In order to follow best practices, simple github actions have been implemented.
- greenCSS checks for EsLint errors (according to our .eslintrs.json rules) before pushing to the repo.
- greenCSS checks the code for prettier violations (according to our .prettierrc file) before pushing to the repo.
- greenCSS checks if the build process is completed successfully before pushing to the repo.
- greenCSS tests the code with cypress before pushing to the repo.

### Markdown Editor

Create new markdown posts and save it. All features, configuration and documentation are fetched from markdown files. A suitable editor can be found at:
`http://localhost:3000/editor`

### SCSS Structure - 7:1

Keeping the architecture consistent and meaningful is even more of a challenge.

A common and effective modular method for structuring Sass projects is the 7-1 pattern. This approach will be used in the development process of this project.

A possible structure could look as follows _(as of July 2022)_

```txt
sass/
|
|– abstracts/
|   |– _variables.scss    # Basic Project Variables
|   |– _font.scss         # Font Related Files
|   |– _color.scss        # Colour Mixins
|   |– _index.scss        # Sass Index File
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _index.scss        # Sass Index File
|
|– components/
|   |– _animation.scss    # Animations
|   |– _buttons.scss      # Buttons
|   |– _input.scss        # Input
|   |– _markdown.scss     # Markdown
|   |– _modal.scss        # Modal
|   |– _nav.scss          # Nav
|   |– _slider.scss       # Range Slider
|   |– _toast.scss        # Toast
|   |– _index.scss        # Sass Index File
|
|– layout/
|   |– _index.scss        # Sass Index File
|
|– pages/
|   |– _brand.scss        # Custom Brand Styles
|   |– _landing.scss      # Custom Landing Page Styles
|   |– _index.scss        # Custom Page Styles
|
|– themes/
|   |– _index.scss        # Sass Index File
|
|– vendors/
|   |– _leaflet.scss      # Leaflet addition
|   |– _index.scss        # 3rd Party Solutions
|
 – globals.scss              # Main Sass Input File
```

## Contribute

Check the [contributing file](/.github/contributing.md) for more details.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs or added new dependencies, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Use semantic versioning for commits.
7. Issue a pull request!

### Basic Frontend Libraries

|                                                                                    | Stars                                                                                                             | Bundle size                                                                                                                                                      | Maintained | Dev- Mode |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [next](https://www.npmjs.com/package/next)                                         | ![GitHub stars](https://img.shields.io/github/stars/vercel/next.js.svg?label=%F0%9F%8C%9F)                        | N/A                                                                                                                                                              | ✅         | ➖        |
| [sass](https://www.npmjs.com/package/sass)                                         | ![GitHub stars](https://img.shields.io/github/stars/sass/dart-sass.svg?label=%F0%9F%8C%9F)                        | [![Bundle size](https://badgen.net/bundlephobia/minzip/sass/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=sass)                                        | ✅         | ➖        |
| [react-select](https://www.npmjs.com/package/react-select)                         | ![GitHub stars](https://img.shields.io/github/stars/JedWatson/react-select.svg?label=%F0%9F%8C%9F)                | [![Bundle size](https://badgen.net/bundlephobia/minzip/react-select/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=react-select)                        | ✅         | ➖        |
| [react-md-editor](https://www.npmjs.com/package/@uiw/react-md-editor)              | ![GitHub stars](https://img.shields.io/github/stars/uiwjs/react-md-editor.svg?label=%F0%9F%8C%9F)                 | [![Bundle size](https://badgen.net/bundlephobia/minzip/@uiw/react-md-editor/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=@uiw/react-md-editor)        | ✅         | ➖        |
| [next-remove-imports](https://www.npmjs.com/package/next-remove-imports)           | ![GitHub stars](https://img.shields.io/github/stars/uiwjs/next-remove-imports.svg?label=%F0%9F%8C%9F)             | [![Bundle size](https://badgen.net/bundlephobia/minzip/next-remove-imports/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/next-remove-imports)           | ✅         | ➖        |
| [fast-average-color](https://www.npmjs.com/package/fast-average-color)             | ![GitHub stars](https://img.shields.io/github/stars/fast-average-color/fast-average-color.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/fast-average-color/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/fast-average-color)             | ➖         | ➖        |
| [tinycolor2](https://www.npmjs.com/package/tinycolor2)                             | ![GitHub stars](https://img.shields.io/github/stars/bgrins/TinyColor.svg?label=%F0%9F%8C%9F)                      | [![Bundle size](https://badgen.net/bundlephobia/minzip/tinycolor2/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/tinycolor2)                             | ➖         | ➖        |
| [gray-matter](https://www.npmjs.com/package/gray-matter)                           | ![GitHub stars](https://img.shields.io/github/stars/jonschlinkert/gray-matter.svg?label=%F0%9F%8C%9F)             | [![Bundle size](https://badgen.net/bundlephobia/minzip/gray-matter/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/gray-matter)                           | ➖         | ➖        |
| [react-markdown](https://www.npmjs.com/package/react-markdown)                     | ![GitHub stars](https://img.shields.io/github/stars/remarkjs/react-markdown.svg?label=%F0%9F%8C%9F)               | [![Bundle size](https://badgen.net/bundlephobia/minzip/react-markdown/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/react-markdown)                     | ✅         | ➖        |
| [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) | ![GitHub stars](https://img.shields.io/github/stars/remarkjs/react-markdown.svg?label=%F0%9F%8C%9F)               | [![Bundle size](https://badgen.net/bundlephobia/minzip/react-syntax-highlighter/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/react-syntax-highlighter) | ✅         | ➖        |
| [purgecss](https://www.npmjs.com/package/purgecss)                                 | ![GitHub stars](https://img.shields.io/github/stars/FullHuman/purgecss.svg?label=%F0%9F%8C%9F)                    | [![Bundle size](https://badgen.net/bundlephobia/minzip/purgecss?label=%F0%9F%92%BE)](https://bundlephobia.com/package/purgecss)                                  | ✅         | ✅        |
| [@sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)                     | ![GitHub stars](https://img.shields.io/github/stars/sendgrid/sendgrid-nodejs.svg?label=%F0%9F%8C%9F)              | [![Bundle size](https://badgen.net/bundlephobia/minzip/@sendgrid/mail?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=@sendgrid/mail)                     | ✅         | ✅        |
| [remark-gfm](https://www.npmjs.com/package/remark-gfm)                             | ![GitHub stars](https://img.shields.io/github/stars/remarkjs/remark-gfm.svg?label=%F0%9F%8C%9F)                   | [![Bundle size](https://badgen.net/bundlephobia/minzip/remark-gfm?label=%F0%9F%92%BE)](https://bundlephobia.com/package/remark-gfm)                              | ✅         | ✅        |
| [axios](https://www.npmjs.com/package/axios)                                       | ![GitHub stars](https://img.shields.io/github/stars/axios/axios.svg?label=%F0%9F%8C%9F)                           | [![Bundle size](https://badgen.net/bundlephobia/minzip/axios?label=%F0%9F%92%BE)](https://bundlephobia.com/package/axios)                                        | ✅         | ✅        |
| [@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)               | ![GitHub stars](https://img.shields.io/github/stars/stripe/stripe-js.svg?label=%F0%9F%8C%9F)                      | [![Bundle size](https://badgen.net/bundlephobia/minzip/@stripe/stripe-js?label=%F0%9F%92%BE)](https://bundlephobia.com/package/@stripe/stripe-js)                | ✅         | ✅        |
| [stripe](https://www.npmjs.com/package/stripe)                                     | ![GitHub stars](https://img.shields.io/github/stars/stripe/stripe-node.svg?label=%F0%9F%8C%9F)                    | [![Bundle size](https://badgen.net/bundlephobia/minzip/stripe?label=%F0%9F%92%BE)](https://bundlephobia.com/package/stripe)                                      | ✅         | ✅        |
| [mapbox-gl](https://www.npmjs.com/package/mapbox-gl)                               | ![GitHub stars](https://img.shields.io/github/stars/mapbox/mapbox-gl-js.svg?label=%F0%9F%8C%9F)                   | [![Bundle size](https://badgen.net/bundlephobia/minzip/mapbox-gl?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=mapbox-gl)                               | ✅         | ✅        |
| [react-map-gl](https://www.npmjs.com/package/react-map-gl)                         | ![GitHub stars](https://img.shields.io/github/stars/visgl/react-map-gl.svg?label=%F0%9F%8C%9F)                    | [![Bundle size](https://badgen.net/bundlephobia/minzip/react-map-gl?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=react-map-gl)                         | ✅         | ✅        |
| [isbot](https://www.npmjs.com/package/isbot)                                       | ![GitHub stars](https://img.shields.io/github/stars/omrilotan/isbot.svg?label=%F0%9F%8C%9F)                       | [![Bundle size](https://badgen.net/bundlephobia/minzip/isbot?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=isbot)                                       | ✅         | ✅        |

### Testing Libraries

|                                                                                | Stars                                                                                                    | Bundle size                                                                                                                                                 | Maintained | Dev- Mode |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | --------- |
| [cypress](https://www.npmjs.com/package/cypress)                               | ![GitHub stars](https://img.shields.io/github/stars/cypress-io/cypress.svg?label=%F0%9F%8C%9F)           | [![Bundle size](https://badgen.net/bundlephobia/minzip/cypress?label=%F0%9F%92%BE)](https://bundlephobia.com/package/cypress)                               | ✅         | ✅        |
| [@cypress/code-coverage](https://www.npmjs.com/package/@cypress/code-coverage) | ![GitHub stars](https://img.shields.io/github/stars/cypress-io/code-coverage.svg?label=%F0%9F%8C%9F)     | [![Bundle size](https://badgen.net/bundlephobia/minzip/@cypress/code-coverage?label=%F0%9F%92%BE)](https://bundlephobia.com/package/@cypress/code-coverage) | ⚠️         | ✅        |
| [check-code-coverage](https://www.npmjs.com/package/check-code-coverage)       | ![GitHub stars](https://img.shields.io/github/stars/bahmutov/check-code-coverage.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/check-code-coverage?label=%F0%9F%92%BE)](https://bundlephobia.com/package/check-code-coverage)       | ➖         | ✅        |

### Automated Workflow Libraries

|                                                                                                  | Stars                                                                                                         | Bundle size                                                                                                                                                                    | Maintained | Dev- Mode |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------- |
| [prettier](https://www.npmjs.com/package/prettier)                                               | ![GitHub stars](https://img.shields.io/github/stars/prettier/prettier.svg?label=%F0%9F%8C%9F)                 | [![Bundle size](https://badgen.net/bundlephobia/minzip/prettier/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=prettier)                                              | ✅         | ✅        |
| [eslint](https://www.npmjs.com/package/eslint)                                                   | ![GitHub stars](https://img.shields.io/github/stars/eslint/eslint.svg?label=%F0%9F%8C%9F)                     | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint/?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint)                                                  | ✅         | ✅        |
| [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)                   | ![GitHub stars](https://img.shields.io/github/stars/prettier/eslint-config-prettier.svg?label=%F0%9F%8C%9F)   | [![Bundle size](https://badgen.net/bundlephobia/minzip/eslint-config-prettier?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=eslint-config-prettier)                   | ✅         | ✅        |
| [husky](https://www.npmjs.com/package/husky)                                                     | ![GitHub stars](https://img.shields.io/github/stars/typicode/husky.svg?label=%F0%9F%8C%9F)                    | [![Bundle size](https://badgen.net/bundlephobia/minzip/husky?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=husky)                                                     | ✅         | ✅        |
| [lint-staged](https://www.npmjs.com/package/lint-staged)                                         | ![GitHub stars](https://img.shields.io/github/stars/okonet/lint-staged.svg?label=%F0%9F%8C%9F)                | [![Bundle size](https://badgen.net/bundlephobia/minzip/lint-staged?label=%F0%9F%92%BE)](https://bundlephobia.com/result?p=lint-staged)                                         | ✅         | ✅        |
| [semantic-release](https://www.npmjs.com/package/semantic-release)                               | ![GitHub stars](https://img.shields.io/github/stars/semantic-release/semantic-release.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/semantic-release/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/semantic-release)                               | ✅         | ✅        |
| [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)                                 | ![GitHub stars](https://img.shields.io/github/stars/conventional-changelog/commitlint.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/@commitlint/cli/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/@commitlint/cli)                                 | ✅         | ✅        |
| [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional) | ![GitHub stars](https://img.shields.io/github/stars/conventional-changelog/commitlint.svg?label=%F0%9F%8C%9F) | [![Bundle size](https://badgen.net/bundlephobia/minzip/@commitlint/config-conventional/?label=%F0%9F%92%BE)](https://bundlephobia.com/package/@commitlint/config-conventional) | ✅         | ✅        |

### Sources

| Illustrations |                                                                                    |
| ------------- | ---------------------------------------------------------------------------------- |
| title         | Leaf Illustration                                                                  |
| source        | [Figma](https://www.figma.com/community/file/943843409604246251/Leaf-Illustration) |
| author        | [seda](https://www.figma.com/@seda)                                                |
| license       | [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/)                           |
| changes       | Changes were made to the fill- colours, line & shadow adjustments.                 |
| ----------    | ------------------------------------                                               |
| title         | MacBook-Pro-2021-Free-Figma-Mockups-BRIX-Templates-Community                       |
| source        | [Figma](https://www.figma.com/community/file/1085600632685733875)                  |
| author        | [BRIX Templates](https://www.figma.com/@brixtemplates)                             |
| license       | [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/)                           |
| changes       | N/A                                                                                |
| ----------    | ------------------------------------                                               |
| title         | Financial Tech Landing Page                                                        |
| source        | [Figma](https://www.figma.com/community/file/1110497789171535089)                  |
| author        | [Ilham Meidi](https://www.figma.com/@ilhammeidi)                                   |
| license       | [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/)                           |
| changes       | Used light background for desktop inspiration                                      |
| ----------    | ------------------------------------                                               |
| title         | Miniverse 3D illustrations                                                         |
| source        | [Figma](https://www.figma.com/community/file/1086469618136183011)                  |
| author        | [Dddkit](https://www.figma.com/@dddkit)                                            |
| license       | [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/)                           |
| changes       | -                                                                                  |
| ----------    | ------------------------------------                                               |
| title         | People 3D Avatar                                                                   |
| source        | [Figma](https://www.figma.com/community/file/1123564098205454830)                  |
| author        | [Spectrum UI](https://www.figma.com/@SpectrumUI)                                   |
| license       | [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/)                           |
| changes       | -                                                                                  |
| ----------    | ------------------------------------                                               |
| title         | Wolf 3D Character                                                                  |
| source        | [Figma](https://www.figma.com/community/file/1087594340256737579)                  |
| author        | [BLRDY](https://www.figma.com/@blrdystudio)                                        |
| license       | [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/)                           |
| changes       | -                                                                                  |

### Ideas & Inspiration

- [Toast](https://www.youtube.com/watch?v=OXP-a9pyNRk)
- [ToC](https://github.com/K-Sato1995/react-toc)
- [Newsletter](https://dev.to/michael_webdev/create-a-mailing-list-with-sendgrid-and-next-js-41f7)
- [Captcha](https://github.com/nabidam/react-captcha)
- [Google Analytics](https://medium.com/@mikegajdos81/how-to-add-googleanalytics-4-to-nextjs-app-in-4-simple-steps-3c6f9de2f866)
- [Stripe](https://betterprogramming.pub/create-your-portfolio-using-next-js-tailwind-css-stripe-and-paypal-80c723bb3fef)
- [Map Tile](https://wiki.openstreetmap.org/wiki/Tile_servers)
- [ImageRenderer](https://amirardalan.com/blog/use-next-image-with-react-markdown)
- [Navigation](https://github.com/gurhanalan/React-StripeNavbar-Component)
