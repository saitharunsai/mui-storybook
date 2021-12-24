import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { colorList } from '../../../../designToken/colorList'
import { labelList } from '../../../../designToken/labelList'

import AppBar from './AppBar'

export default {
  title: 'MUI Default/Surfaces/App Bar',
  component: AppBar,

  argTypes: {
    color: {
      description: 'color for AppBar',
      options: colorList,
      control: {
        type: 'radio',
        labels: labelList,
      },
    },
  },
} as ComponentMeta<TODO>

export const Default: ComponentStory<TODO> = (props) => <AppBar {...props} />
