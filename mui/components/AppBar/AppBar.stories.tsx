import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { primary } from '../../../designToken'

import AppBar from './index'

export default {
  title: 'MUI/Components/AppBar',
  component: AppBar,
  argTypes: {
    bgColor: {
      description: 'Main color of AppBar',
      defaultValue: primary.main,
      options: [
        primary.main,
        primary.light,
        primary.dark,
        primary.contrastText,
      ],
      control: {
        type: 'radio',
        labels: {
          [primary.main]: 'primary.main',
          [primary.light]: 'primary.light',
          [primary.dark]: 'primary.dark',
          [primary.contrastText]: 'primary.contrastText',
        },
      },
    },
  },
} as ComponentMeta<typeof AppBar>

export const Default: ComponentStory<typeof AppBar> = (props) => (
  <AppBar {...props} />
)
