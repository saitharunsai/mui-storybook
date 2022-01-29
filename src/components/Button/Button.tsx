import MUIButton from '@mui/material/Button'
import React from 'react'

interface ButtonProps {
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: 'text' | 'outlined' | 'contained'
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
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
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
}

const Button: React.FC<ButtonProps> = ({
  variant = 'outlined',
  children = 'Button',
  ...props
}) => {
  return (
    <MUIButton variant={variant} {...props}>
      {children}
    </MUIButton>
  )
}

export default Button
