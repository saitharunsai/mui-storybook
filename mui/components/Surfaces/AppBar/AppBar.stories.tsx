import { Box } from '@mui/system'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { storybookDisplayNameList } from '../../../../designToken'

import AppBar from './default'
import DemoComponents from './Demo'

export default {
  title: 'MUI Default/Surfaces/App Bar',
  component: AppBar,
  argTypes: {
    bgcolor: {
      description: 'bgcolor',
      options: storybookDisplayNameList,
      control: {
        type: 'radio',
        labels: storybookDisplayNameList,
      },
    },
  },
} as ComponentMeta<TODO>

export const Default: ComponentStory<TODO> = () => (
  <Box sx={{ height: 80, width: 900 }}>
    <AppBar position="relative" sx={{ height: 80, p: 2 }}>
      AppBar
    </AppBar>
  </Box>
)

const DemoTemplate: ComponentStory<TODO> = (props) => (
  <DemoComponents {...props} />
)
export const Demo = DemoTemplate.bind({})
// Demo.args = {
//   color: {
//     description: 'color for Demo',
//     options: colorList,
//     control: {
//       type: 'radio',
//       labels: storybookDisplayNameList,
//     },
//   },
// }
