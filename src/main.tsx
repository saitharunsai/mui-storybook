import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as DesignTokenProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'

import designToken from '../designToken/createTheme'

import { store } from './app/store'
import Routes from './Routes'

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
