import Checkbox from '@mui/material/Checkbox'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/Inputs/Checkbox',
  component: Checkbox,
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

const DefaultTemplate: ComponentStory<TODO> = ({
  bgcolor = 'primary.main',
}) => <Checkbox sx={{ bgcolor: bgcolor }} />

export const Default = DefaultTemplate.bind({})
Default.args = {}