export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

import { muiTheme } from 'storybook-addon-material-ui5'

export const decorators = [
  muiTheme()
]
