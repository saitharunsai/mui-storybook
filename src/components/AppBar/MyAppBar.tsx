import AppBar from '@mui/material/AppBar'
import React, { memo } from 'react'

const MyAppBar: React.FC = () => {
  return (
    <AppBar // @ts-ignore
      sx={(theme) => {
        color: theme.palette.primary.contrastText
      }}
      position="fixed"
    />
  )
}

export default memo(MyAppBar)
