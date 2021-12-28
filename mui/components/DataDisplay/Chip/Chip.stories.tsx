import Chip from '@mui/material/Chip'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { mainColorList } from '../../../../designToken'

export default {
  title: 'MUI Default/DataDisplay/Chip',
  component: Chip,
  argTypes: {
    color: {
      description: 'color',
      options: mainColorList,
      control: {
        type: 'radio',
        labels: mainColorList,
      },
    },
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'radio',
        labels: ['small', 'medium'],
      },
    },
    variant: {
      options: ['filled', 'outlined'],
      control: {
        type: 'radio',
        labels: ['filled', 'outlined'],
      },
    },
  },
} as ComponentMeta<TODO>

const DefaultTemplate: ComponentStory<TODO> = (props) => <Chip {...props} />

export const Default = DefaultTemplate.bind({})
Default.args = {
  label: 'Shop',
  clickable: true,
  disabled: false,
  size: 'medium',
  variant: 'filled',
}
