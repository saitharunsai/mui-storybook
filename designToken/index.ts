import type { Theme } from '@mui/material/styles'
import { createTheme as createDesignToken } from '@mui/material/styles'
export { useTheme as useDesignToken } from '@mui/material/styles'

import { muiDefaultTheme } from './muiDefaultTheme'

const theme: Theme = createDesignToken(muiDefaultTheme)

export interface DesignToken {
  mixins: Theme['mixins']
  components?: Theme['components']
  shadows: Theme['shadows']
  palette: Theme['palette']
  typography: Theme['typography']
  transitions: Theme['transitions']
  zIndex: Theme['zIndex']
}

const designToken: DesignToken = {
  mixins: theme.mixins,
  components: theme.components,
  shadows: theme.shadows,
  palette: theme.palette,
  typography: theme.typography,
  transitions: theme.transitions,
  zIndex: theme.zIndex,
}

export default designToken

// token selector
export const mixin = designToken.mixins
export const components = designToken.components
export const shadow = designToken.shadows
export const palette = designToken.palette
export const typography = designToken.typography
export const transitions = designToken.transitions
export const zIndex = designToken.zIndex

// palette selector
export const primary = palette.primary
export const secondary = palette.secondary
export const error = palette.error
export const warning = palette.warning
export const info = palette.info
export const success = palette.success
