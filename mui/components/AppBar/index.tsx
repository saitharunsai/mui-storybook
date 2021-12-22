import MenuIcon from '@mui/icons-material/Menu'
import MUIAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React, { memo } from 'react'

import { palette } from '../../../designToken'

type Props = {
  bgColor?: string
}

const AppBar: React.FC<Props> = ({ bgColor = palette.primary.main }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar sx={{ bgcolor: bgColor }} position="static">
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
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default memo(AppBar)
