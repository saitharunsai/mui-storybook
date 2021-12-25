import { Box } from '@mui/system'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

import AppBar from './default'
import DemoComponents from './Demo'

export default {
  title: 'MUI Default/Surfaces/App Bar',
  component: AppBar,
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

export const Default: ComponentStory<TODO> = (props) => (
  <Box sx={{ height: 80, width: 900 }}>
    <AppBar
      position="relative"
      sx={{ height: 80, p: 2, bgcolor: props.bgcolor }}
    >
      AppBar
    </AppBar>
  </Box>
)

const DemoTemplate: ComponentStory<TODO> = (props) => (
  <DemoComponents {...props} />
)
export const Demo = DemoTemplate.bind({})
Demo.args = {
  bgcolor: {
    description: 'bgcolor',
    options: paletteNameList,
    control: {
      type: 'radio',
      labels: paletteNameList,
    },
  },
}
