import Radio from '@mui/material/Radio'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

import RadioButtonsGroupComponents from './RadioButtonsGroup'

export default {
  title: 'MUI Default/Inputs/RadioButton',
  component: Radio,
  argTypes: {
    bgcolor: {
      description: 'bgcolor',
      options: paletteNameList,
      control: {
        type: 'radio',
        labels: paletteNameList,
      },
    },
  },
} as ComponentMeta<TODO>

export const RadioButtonsGroup: ComponentStory<TODO> = () => (
  <RadioButtonsGroupComponents />
)
