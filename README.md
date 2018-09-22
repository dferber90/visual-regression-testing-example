# Visual Regression Testing Example

Shows how [`jsdom-screenshot`](https://github.com/dferber90/jsdom-screenshot/) can be combined with [`jest-transform-css`](https://github.com/dferber90/jest-transform-css/) to enable visual regression testing in Jest - without bundling first!

## Commands

```bash
# Starts the development server
yarn start

# Produces a production build to "dist"
yarn build

# Runs the tests
yarn test

# Runs the tests in watch mode
yarn test --watch

# Runs the tests in without caching, which is useful if you're modfiying
# jsdom-screenshot or jest-transform-css or any other transfomers, as jest
# won't cache the files. Otherwise the cache will only be busted when the
# contents of transformed files change.
# You will only need this in case you are working on jsdom-screenshot or
# jest-transform-css.
# Can be combined with --watch.
yarn test --no-cache
```

## Supported sources of styles

- css-modules (`style.mod.css` sets the buttons' background color)
- imported css-modules (`global-styles-through-css-loader.mod.css` sets the page background color)
- imported plain css (`global.css` sets the font-family)
- global styles through link tags in head (resets the browser css: no padding & margin on body)
  - see `setup-jsdom.js` and `src/index.html`

## Test performance

Notice that these tests are slow as we're making network requests from
puppeteer for demo purposes. When using a reasonable setup and stubbing or
blocking unnecessary requests, the generateImage function takes around 750ms.
You should still not go overboard with them, but a few errors caught with
good Visual Regression Tests will make up for the lost time in tests.
Find a good balance.
