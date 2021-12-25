import './index.css'
import StorybookRenderer from './StorybookRenderer'

export const parameters = {
  // viewMode: 'docs', // @TODO This config working with buggy. Display docs tab by default. resource -> https://github.com/storybookjs/storybook/issues/12111
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/
    }
  }
}

export const decorators = [
  StorybookRenderer
]

