import './index.css'
import StorybookRenderer from './StorybookRenderer'

export const parameters = {
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
