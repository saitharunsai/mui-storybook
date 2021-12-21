import { ThemeProvider } from '@mui/material/styles'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import theme from '../../theme'

import AppBar from './'

const meta: ComponentMeta<any> = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: ComponentStory<any> = () => (
  <ThemeProvider theme={theme}>
    <AppBar />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {}
