import SpeedDial from '@mui/material/SpeedDial'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/Navigation/SpeedDial',
  component: SpeedDial,
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
}) => (
  <SpeedDial ariaLabel="foo" sx={{ bgcolor: bgcolor }} children={children} />
)

export const Default = DefaultTemplate.bind({})
Default.args = {}
