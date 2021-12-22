import type { Palette, PaletteColor, Theme } from '@mui/material/styles'

import origin from './createTheme'

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
  mixins: origin.mixins,
  components: origin.components,
  shadows: origin.shadows,
  palette: origin.palette,
  typography: origin.typography,
  transitions: origin.transitions,
  zIndex: origin.zIndex,
}

export default designToken

export const mixin = designToken.mixins
export const components = designToken.components
export const shadow = designToken.shadows

export const palette: Palette = designToken.palette
export const primary: PaletteColor = palette.primary
export const secondary: PaletteColor = palette.secondary
export const error: PaletteColor = palette.error
export const warning: PaletteColor = palette.warning
export const info: PaletteColor = palette.info
export const success: PaletteColor = palette.success

export const typography = designToken.typography
export const transitions = designToken.transitions
export const zIndex = designToken.zIndex

export type AllPaletteColor =
  | keyof typeof primary
  | keyof typeof secondary
  | keyof typeof error
  | keyof typeof warning
  | keyof typeof info
  | keyof typeof success
