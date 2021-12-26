import Stack from '@mui/material/Stack'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/Layout/Stack',
  component: Stack,
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
  children = 'Hello World',
  bgcolor = 'primary.main',
}) => <Stack sx={{ bgcolor: bgcolor }} children={children} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
