import CssBaseline from '@mui/material/CssBaseline'
import {
  ThemeProvider as DesignTokenProvider,
  createTheme as createDesignToken,
} from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'

import { muiDefault } from './../designToken/muiDefault'
import { store } from './app/store'
import Routes from './Routes'

const designToken = createDesignToken(muiDefault)

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <DesignTokenProvider theme={designToken}>
        <CssBaseline />
        <Routes />
      </DesignTokenProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
