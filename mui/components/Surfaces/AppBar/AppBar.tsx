import MenuIcon from '@mui/icons-material/Menu'
import MUIAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../../designToken'
import type { ColorList } from '../../../../designToken'

type AppBarProps = {
  color?: ColorList
  text?: string
  position?: TODO
  buttonComponent?: TODO
}

const AppBar: React.FC<AppBarProps> = ({
  color = palette.primary.main,
  text = 'MUI v5 Storybook Design System',
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar sx={{ bgcolor: color }} position="static">
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
      </MUIAppBar>
    </Box>
  )
}

export default AppBar
