import type { error, info, primary, secondary, success, warning } from './index'

export type AllPaletteColor =
  | keyof typeof primary
  | keyof typeof secondary
  | keyof typeof error
  | keyof typeof warning
  | keyof typeof info
  | keyof typeof success
