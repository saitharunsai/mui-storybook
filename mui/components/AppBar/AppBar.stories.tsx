import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { primary } from '../../../designToken'

import AppBar from './index'

const meta: ComponentMeta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
}

export default meta

const Template: ComponentStory<typeof AppBar> = (props) => <AppBar {...props} />

export const Primary_Main = Template.bind({})
Primary_Main.args = {
  barColor: primary.main,
}
export const Primary_Light = Template.bind({})
Primary_Light.args = {
  barColor: primary.light,
}
export const Primary_Dark = Template.bind({})
Primary_Dark.args = {
  barColor: primary.dark,
}

export const Primary_ContrastText = Template.bind({})
Primary_ContrastText.args = {
  barColor: primary.contrastText,
}
