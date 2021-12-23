import type { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  primary,
  secondary,
  error,
  common,
  warning,
  success,
  info,
} from '../../../designToken'
import { colorList } from '../../../designToken/colorList'

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
        labels: {
          [common.white]: 'common.white',
          [common.black]: 'common.black',
          [primary.main]: 'primary.main',
          [primary.light]: 'primary.light',
          [primary.dark]: 'primary.dark',
          [primary.contrastText]: 'primary.contrastText',
          [secondary.main]: 'secondary.main',
          [secondary.light]: 'secondary.light',
          [secondary.dark]: 'secondary.dark',
          [secondary.contrastText]: 'secondary.contrastText',
          [error.main]: 'error.main',
          [error.light]: 'error.light',
          [error.dark]: 'error.dark',
          [error.contrastText]: 'error.contrastText',
          [info.main]: 'info.main',
          [info.light]: 'info.light',
          [info.dark]: 'info.dark',
          [warning.main]: 'warning.main',
          [warning.light]: 'warning.light',
          [warning.dark]: 'warning.dark',
          [warning.contrastText]: 'warning.contrastText',
          [success.main]: 'success.main',
          [success.light]: 'success.light',
          [success.dark]: 'success.dark',
          [success.contrastText]: 'success.contrastText',
        },
      },
    },
  },
} as ComponentMeta<typeof AppBar>

export const Default: ComponentStory<typeof AppBar> = (props) => (
  <AppBar {...props} />
)
