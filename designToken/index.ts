import type { Theme } from '@mui/material/styles'
import { createTheme as createDesignToken } from '@mui/material/styles'

export { useTheme as useDesignToken } from '@mui/material/styles'
import { muiDefaultTheme } from './muiDefaultTheme'
import type {
  Common,
  Error,
  Info,
  Primary,
  Secondary,
  Success,
  Warning,
  ColorList,
} from './types'

const theme: Theme = createDesignToken(muiDefaultTheme)

export interface DesignToken {
  mixins: Theme['mixins']
  components?: Theme['components']
  shadows: Theme['shadows']
  palette: TODO
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

// main color palette selector
export const common: Common = palette.common
export const primary: Primary = palette.primary
export const secondary: Secondary = palette.secondary
export const error: Error = palette.error
export const warning: Warning = palette.warning
export const info: Info = palette.info
export const success: Success = palette.success

export type {
  Common,
  Error,
  Info,
  Primary,
  Secondary,
  Success,
  Warning,
  ColorList,
}
