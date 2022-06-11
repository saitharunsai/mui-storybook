<p align="center">
  <a href="https://main--61c23f8c33dad8003adc12f6.chromatic.com" target="_blank">
    <img src="https://digital3.nyc3.cdn.digitaloceanspaces.com/mui-storybook.gif" alt="storybook gif" align="center" />
    <h1 align="center">MUI Storybook</h1>
  </a>
</p>

</br>

<p align="center">
  <a href="https://main--61c23f8c33dad8003adc12f6.chromatic.com">
    <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg" alt="Storybook" />
  </a>
   <a href="https://github.com/saitharunsai/mui-storybook/actions/workflows/chromatic.yml">
    <img src="https://github.com/saitharunsai/mui-storybook/actions/workflows/chromatic.yml/badge.svg" alt="chromatic" />
  </a>
  <a href="">
    <img src="" alt="" />
  </a>
   <a href="">
    <img src="" alt="" />
  </a>
  <a href="">
    <img src="" alt="" />
  </a>
</p>

This project is [Storybook](https://storybook.js.org/) for [MUI v5](https://mui.com/) default components.

# [Progress](https://github.com/saitharunsai/mui-storybook/issues/61)

At the time this project progress is not completed.  
There are many Components that have not yet been added to the Storybook, and the feature of switch between the default Light Theme and Dark Theme has not yet been implemented.

Please take a look [Progress](https://github.com/saitharunsai/mui-storybook/issues/61) page to track current status, and contribution is really helpful. 😄

# Why

This project is being developed to support front-end teams that are MUI users and use Storybook in their workflow.

Although the official MUI documentation is far more useful as a reference, I started this project because I realized that some teams that using Storybook or Chromatic as part of their development process have a need to make the external UI libraries available to everyone in Storybook.

# Installation

Copy and paste following `refs` field into the your `.storybook/main.js` file.

```js
// .storybook/main.js

module.exports = {
  refs: {
    'mui-storybook': {
      title: 'MUI Storybook',
      url: 'https://61c23f8c33dad8003adc12f6-cwovkuxnql.chromatic.com/',
    },
  },
}
```

And then start storybook like `yarn storybook` `npm run storybook`, you'll see the mui-storybook in the your storybook.

<img src="https://digital3.nyc3.cdn.digitaloceanspaces.com/mui-storybook-install.png" alt="installation" />

# Local Development

```sh
git clone https://github.com/saitharunsai/mui-storybook.git
cd mui-storybook
yarn
yarn storybook # launch Storybook dev mode
```

## Contribute Guide

0. Fork the repository and create your branch from main.
1. Run `yarn` in the repository root.
2. Run `yarn storybook`.
3. Run `yarn gen <ComponentName>`
4. Then you got scaffold like this

```shell
yarn gen Paper
yarn run v1.22.18
$ plop Paper
✔  ++ /src/components/Paper/Paper.tsx
✔  ++ /src/components/Paper/Paper.stories.tsx
✨  Done in 0.81s.
```

# License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/laststance/vite-redux-toolkit-starter/laststance/vite-redux-toolkit-starter/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/laststance/vite-redux-toolkit-starter/laststance/vite-redux-toolkit-starter/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/laststance/vite-redux-toolkit-starter/laststance/vite-redux-toolkit-starter/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href=""><img src="https://avatars1.githubusercontent.com/u/65693649?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sai Tharun</b></sub></a><br /></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
