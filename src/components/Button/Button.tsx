/* eslint-disable */
import MUIButton from '@mui/material/Button'
import type {
  ButtonPropsColorOverrides,
  ButtonPropsSizeOverrides,
  ButtonPropsVariantOverrides,
} from '@mui/material/Button/Button'
import type { ButtonClasses } from '@mui/material/Button/buttonClasses'
import type { Theme } from '@mui/material/styles'
import type { SxProps } from '@mui/system'
import type { OverridableStringUnion } from '@mui/types'
import React from 'react'
/* eslint-enable */

interface ButtonProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ButtonClasses>
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning',
    ButtonPropsColorOverrides
  >
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation?: boolean
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple?: boolean
  /**
   * Element placed after the children.
   */
  endIcon?: React.ReactNode
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: OverridableStringUnion<
    'small' | 'medium' | 'large',
    ButtonPropsSizeOverrides
  >
  /**
   * Element placed before the children.
   */
  startIcon?: React.ReactNode
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >
}

const Button: React.FC<ButtonProps> = ({ children = 'Button', ...props }) => {
  return <MUIButton {...props}>{children}</MUIButton>
}

export default Button
