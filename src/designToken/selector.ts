import { designToken } from './createDesignToken'

export const shape = designToken.shape
export const spacing = designToken.spacing
export const mixin = designToken.mixins
export const components = designToken.components
export const shadow = designToken.shadows
export const breakpoints = designToken.breakpoints
export const palette = designToken.palette
export const typography = designToken.typography
export const transitions = designToken.transitions
export const zIndex = designToken.zIndex

// shape selector
export const borderRadius = shape.borderRadius

// palette selector
export const mode = palette.mode
export const common = palette.common
export const primary = palette.primary
export const secondary = palette.secondary
export const error = palette.error
export const warning = palette.warning
export const info = palette.info
export const success = palette.success
export const text = palette.text
export const grey = palette.grey
export const action = palette.action
export const background = palette.background

// transitions selector
export const easing = transitions.easing
export const duration = transitions.duration
