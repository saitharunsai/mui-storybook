import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Renderer from '../../../.storybook/Renderer'
import designToken from '../../../designToken/createTheme'

import AppBar from './index'

const meta: ComponentMeta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    barColor: {},
  },
}

export default meta

const Template: ComponentStory<typeof AppBar> = (props) => (
  <Renderer>
    <AppBar {...props} />
  </Renderer>
)

export const Primary = Template.bind({})
Primary.args = {
  barColor: designToken.palette.primary.light,
}
