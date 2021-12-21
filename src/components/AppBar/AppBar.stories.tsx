import type { Meta, Story } from '@storybook/react'

import MyAppBar from './MyAppBar'

const meta: Meta = {
  title: 'Components/AppBar',
  component: MyAppBar,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

// @ts-ignore
const Template: Story = (props) => <MyAppBar {...props}>Hello</MyAppBar>

export const Default = Template.bind({})
Default.args = {}
