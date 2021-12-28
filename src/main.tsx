import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import './index.css'

import { DesignTokenProvider, designToken } from '../designToken'

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
