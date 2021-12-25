import type { Theme } from '@mui/material/styles'
import type { ThemeOptions } from '@mui/system'

export function assertCast<T>(v: any): asserts v is T {}

export interface DesignToken extends Theme {
  palette: Override<Palette, Theme['palette']> // @TODO perfect overide withtin non-error extends
}

export type DesignTokenOptions = ThemeOptions

export type CreateDesignToken = (
  options: DesignTokenOptions,
  ...args: object[]
) => DesignToken

// generate concrete literal type with color code
export type Common = {
  black: '#000'
  white: '#fff'
}

export type Primary = {
  main: '#1976d2'
  light: '#42a5f5'
  dark: '#1565c0'
  contrastText: '#fff'
}

export type Secondary = {
  main: '#9c27b0'
  light: '#ba68c8'
  dark: '#7b1fa2'
  contrastText: '#fff'
}

export type Error = {
  main: '#d32f2f'
  light: '#ef5350'
  dark: '#c62828'
  contrastText: '#fff'
}

export type Warning = {
  main: '#ed6c02'
  light: '#ff9800'
  dark: '#e65100'
  contrastText: '#fff'
}

export type Info = {
  main: '#0288d1'
  light: '#03a9f4'
  dark: '#01579b'
  contrastText: '#fff'
}

export type Success = {
  main: '#2e7d32'
  light: '#4caf50'
  dark: '#1b5e20'
  contrastText: '#fff'
}

export interface Palette {
  mode: 'light' | 'dark'
  common: Common
  primary: Primary
  secondary: Secondary
  error: Error
  warning: Warning
  info: Info
  success: Success
}

export type ColorList =
  | Common['white']
  | Common['black']
  | Primary['main']
  | Primary['light']
  | Primary['dark']
  | Primary['contrastText']
  | Secondary['main']
  | Secondary['light']
  | Secondary['dark']
  | Secondary['contrastText']
  | Error['main']
  | Error['light']
  | Error['dark']
  | Error['contrastText']
  | Warning['main']
  | Warning['light']
  | Warning['dark']
  | Warning['contrastText']
  | Info['main']
  | Info['light']
  | Info['dark']
  | Info['contrastText']
  | Success['main']
  | Success['light']
  | Success['dark']
  | Success['contrastText']
