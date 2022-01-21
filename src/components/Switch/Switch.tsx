/* eslint-disable */
import type {
  InternalStandardProps as StandardProps,
  Theme,
} from '@mui/material'
import type { SwitchBaseProps } from '@mui/material/internal/SwitchBase'
import MUISwitch from '@mui/material/Switch'
import type {
  SwitchPropsColorOverrides,
  SwitchPropsSizeOverrides,
} from '@mui/material/Switch/Switch'
import type { SwitchClasses } from '@mui/material/Switch/switchClasses'
import type { SxProps } from '@mui/system'
import type { OverridableStringUnion } from '@mui/types'
import React from 'react'
/* eslint-enable */

interface SwitchProps
  extends StandardProps<SwitchBaseProps, 'checkedIcon' | 'color' | 'icon'> {
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon?: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SwitchClasses>
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default',
    SwitchPropsColorOverrides
  >
  /**
   * If `true`, the component is disabled.
   */
  disabled?: boolean
  /**
   * The icon to display when the component is unchecked.
   */
  icon?: React.ReactNode
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'small' | 'medium', SwitchPropsSizeOverrides>
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: unknown
}

const Switch: React.FC<SwitchProps> = (props) => {
  return <MUISwitch {...props} />
}

export default Switch
