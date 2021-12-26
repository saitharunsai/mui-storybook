import CircularProgress from '@mui/material/CircularProgress'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/Feedback/Progress',
  component: CircularProgress,
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
}) => <CircularProgress sx={{ bgcolor: bgcolor }} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
