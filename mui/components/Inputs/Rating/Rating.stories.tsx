import Rating from '@mui/material/Rating'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

import BasicRatingComponents from './BasicRating'

export default {
  title: 'MUI Default/Inputs/Rating',
  component: Rating,
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

export const BasicRating: ComponentStory<TODO> = () => <BasicRatingComponents />
