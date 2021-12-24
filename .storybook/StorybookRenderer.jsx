import AppBar from '../mui/components/Surfaces/AppBar/AppBar'
import { store } from '../src/app/store'
import { Provider as ReduxProvider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'


import { DesignTokenProvider, designToken } from '../designToken'

export const StorybookRenderer = (Story) =>
  (<ReduxProvider store={store}>
    <DesignTokenProvider theme={designToken}>
      <CssBaseline/>
      <Story/>
    </DesignTokenProvider>
  </ReduxProvider>)

export default StorybookRenderer
