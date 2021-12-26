import { Accessibility } from '@mui/icons-material'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/DataDisplay/Icons',
  component: Accessibility,
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
}) => <Accessibility sx={{ bgcolor: bgcolor }} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
