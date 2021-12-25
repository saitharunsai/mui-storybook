import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { colorList, storybookDisplayNameList } from '../../../../designToken'

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
        labels: storybookDisplayNameList,
      },
    },
  },
} as ComponentMeta<TODO>

export const Default: ComponentStory<TODO> = (props) => <AppBar {...props} />
