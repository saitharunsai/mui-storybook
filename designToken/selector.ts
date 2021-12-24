// token selector
import { designToken } from './createDesignToken'
import type {
  Common,
  Error,
  Info,
  Primary,
  Secondary,
  Success,
  Warning,
  Palette,
} from './types'

export const mixin = designToken.mixins
export const components = designToken.components
export const shadow = designToken.shadows
export const palette = designToken.palette as Palette // @TODO perfect Platte type
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
