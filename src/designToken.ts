import theme from './theme'

export type Palette = typeof theme.palette
export type Typography = typeof theme.typography
export type Transitions = typeof theme.transitions
export type zIndex = typeof theme.zIndex

interface DesignToken {
  palette: Palette
  typography: Typography
  transitions: Transitions
  zIndex: zIndex
}

export const designToken: DesignToken = {
  palette: theme.palette,
  typography: theme.typography,
  transitions: theme.transitions,
  zIndex: theme.zIndex,
}
