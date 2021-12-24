import { ThemeProvider } from '@mui/material/styles'
import AppBar from '../mui/components/Surfaces/AppBar/AppBar'
import { store } from '../src/app/store'
import { Provider as ReduxProvider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'

import { createTheme as createDesignToken } from '@mui/material/styles'

import { muiDefaultTheme } from '../designToken/muiDefaultTheme'

const designToken = createDesignToken(muiDefaultTheme)

export const StorybookRenderer = (Story) =>
  (<ReduxProvider store={store}>
    <ThemeProvider theme={designToken}>
      <CssBaseline/>
      <Story/>
    </ThemeProvider>
  </ReduxProvider>)

export default StorybookRenderer
