import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { primary } from '../../../designToken'
import colorList from '../../../designToken/colorList'
import labelList from '../../../designToken/labelList'

import AppBar from './index'

export default {
  title: 'MUI/Components/AppBar',
  component: AppBar,
  argTypes: {
    bgColor: {
      description: 'Main color of AppBar',
      defaultValue: primary.main,
      options: colorList,
      control: {
        type: 'radio',
        labels: labelList,
      },
    },
  },
} as ComponentMeta<typeof AppBar>

export const Default: ComponentStory<typeof AppBar> = (props) => (
  <AppBar {...props} />
)
