// @ts-ignore
import React, { memo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import AppBar from '../mui/components/AppBar'
import { store } from '../src/app/store'
import { Provider as ReduxProvider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'

import { createTheme as createDesignToken } from '@mui/material/styles'

import { muiDefault } from './../designToken/muiDefault'

const designToken = createDesignToken(muiDefault)

const Renderer: React.FC = ({ children }) => {
  return <>
    <ReduxProvider store={store}>
      <ThemeProvider theme={designToken}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  </>
}

export default memo(Renderer)
