import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import type { SystemCssProperties } from '@mui/system'
import React from 'react'

import type { DesignToken } from '../../../../designToken'

export type DemoProps = {
  bgcolor?: SystemCssProperties<DesignToken>
  text?: string
  position?: TODO
  buttonComponent?: TODO
}

const Demo: React.FC<DemoProps> = ({
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

export default Demo