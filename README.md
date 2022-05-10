# React App with Giphy Inifinte Scroll

This is a mini React app created by Create React App boilerplate with Typescript support, it integrates with Giphy API to demonstrate infinite scrolling effect.

## How to Run it Locally

```sh
# Clone it
git clone https://github.com/unicar9/react-giphy.git
cd react-giphy

# Add .env file at root directory and add a Giphy API key (see .env-template)
touch .env

# Install dependencies
yarn

# Start dev server and test the app on http://localhost:3000
# from the root directory
yarn start
```

## Demo

![demo](./demo.gif)

## Reasoning behind the approach taken

- Infinite scrolling effect is enabled by [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). It is specifically designed to solve any scoll based effects without constantly listening to scrolling events, rather, it allows us to attach a callback when targeted elements come into view.

- Styling solution is modular CSS because the app is pretty light-weighted in terms of styles, so I didn't consider other CSS libraries, also it is an out-of-the-box feature in CRA, the advantage is that modular CSS styles are scoped to avoid global naming clashes.

- Custom hooks with native useState, useEffect and useCallback to handle calling external API with progressing offsets multiple times, also detecting load more timing with Intersection Observer API.

- Roughly spent 3 hours.

## Online References

- Implement intersectionObserver in React: https://dev.to/producthackers/intersection-observer-using-react-49ko
- Gradient buttons styles: https://gradientbuttons.colorion.co/
- Loader styles: https://loading.io/css/
