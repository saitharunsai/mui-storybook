import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../../designToken'
import type { ColorList } from '../../../../designToken'

import AppBar from './default'

export type DemoProps = {
  color?: ColorList
  text?: string
  position?: TODO
  buttonComponent?: TODO
}

const Demo: React.FC<DemoProps> = ({
  color = palette.primary.main,
  text = 'MUI v5 Storybook Design System',
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: color }} position="static">
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

export default Demo
