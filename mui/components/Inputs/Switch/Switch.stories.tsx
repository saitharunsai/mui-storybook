import Switch from '@mui/material/Switch'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/Inputs/Switch',
  component: Switch,
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
}) => <Switch sx={{ bgcolor: bgcolor }} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
