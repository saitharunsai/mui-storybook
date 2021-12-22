import './index.css'
import Renderer from './Renderer'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/
    }
  }
}

export const decorators = [
  Renderer
]
