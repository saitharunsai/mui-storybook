/* eslint-disable */
import type { PaletteColor, Theme } from '@mui/material/styles'
import type { Components } from '@mui/material/styles/components'
import type { Mixins } from '@mui/material/styles/createMixins'
import type { Palette as DefaultPalette } from '@mui/material/styles/createPalette'
import type { Transitions } from '@mui/material/styles/createTransitions'
import type { Typography } from '@mui/material/styles/createTypography'
import type { Shadows } from '@mui/material/styles/shadows'
import type { ZIndex } from '@mui/material/styles/zIndex'
import type { ThemeOptions } from '@mui/system'
import type { BreakpointsOptions } from '@mui/system/createTheme/createBreakpoints'
import type { SpacingOptions } from '@mui/system/createTheme/createSpacing'
import type { Direction } from '@mui/system/createTheme/createTheme'
import type { ShapeOptions } from '@mui/system/createTheme/shape'
import { Shape } from '@mui/system/createTheme/shape'
import { Breakpoints } from '@mui/system/createTheme/createBreakpoints'
import { Spacing } from '@mui/system/createTheme/createSpacing'
import { Color } from '@mui/material'
/* eslint-enable */
export function assertCast<T>(v: any): asserts v is T {}

// https://mui.com/customization/color/#color-palette
export interface Palette extends DefaultPalette {
  tertiary: PaletteColor
  oneOff: Color
  red: Color
  pink: Color
  purple: Color
  deepPurple: Color
  indigo: Color
  blue: Color
  lightBlue: Color
  cyan: Color
  teal: Color
  green: Color
  lightGreen: Color
  lime: Color
  yellow: Color
  amber: Color
  orange: Color
  deepOrange: Color
  brown: Color
  blueGrey: Color
}

export interface DesignToken extends Theme {
  shape: Shape
  breakpoints: Breakpoints
  direction: Direction
  mixins: Mixins
  spacing: Spacing
  components?: Components
  palette: Palette
  shadows: Shadows
  transitions: Transitions
  typography: Typography
  zIndex: ZIndex
  unstable_strictMode?: boolean
}

export interface DesignTokenOptions extends ThemeOptions {
  shape?: ShapeOptions
  breakpoints?: BreakpointsOptions
  direction?: Direction
  mixins?: unknown
  palette?: Record<string, any>
  shadows?: unknown
  spacing?: SpacingOptions
  transitions?: unknown
  components?: Record<string, any>
  typography?: unknown
  zIndex?: Record<string, number>
}

export type CreateDesignToken = (
  options: DesignTokenOptions,
  ...args: object[]
) => DesignToken
