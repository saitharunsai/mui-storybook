import MUISwitch from '@mui/material/Switch'
import React from 'react'

interface SwitchProps {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default'
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size?: 'small' | 'medium'
  /**
   * If `true`, the component is checked.
   */
  checked?: boolean
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked?: boolean
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple?: boolean
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple?: boolean
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean
}

const Switch: React.FC<SwitchProps> = (props) => {
  return <MUISwitch {...props} />
}

export default Switch
