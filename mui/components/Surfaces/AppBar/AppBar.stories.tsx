import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { paletteNameList } from '../../../../designToken'

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

const DemoTemplate: ComponentStory<TODO> = ({
  bgcolor = 'primary.main',
  text = 'MUI v5 Storybook Design System',
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: bgcolor }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {text}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
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
