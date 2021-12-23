import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { primary, colorList, labelList } from '../../../designToken'

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
