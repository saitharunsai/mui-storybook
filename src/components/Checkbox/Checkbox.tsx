/* eslint-disable */
import type {
  InternalStandardProps as StandardProps,
  Theme,
} from '@mui/material'
import MUICheckbox from '@mui/material/Checkbox'
import type {
  CheckboxPropsColorOverrides,
  CheckboxPropsSizeOverrides,
} from '@mui/material/Checkbox/Checkbox'
import type { CheckboxClasses } from '@mui/material/Checkbox/checkboxClasses'
import type { SwitchBaseProps } from '@mui/material/internal/SwitchBase'
import type { SxProps } from '@mui/system'
import type { OverridableStringUnion } from '@mui/types'
import React from 'react'
/* eslint-enable */

interface CheckboxProps
  extends StandardProps<
    SwitchBaseProps,
    'checkedIcon' | 'color' | 'icon' | 'type'
  > {
  /**
   * If `true`, the component is checked.
   */
  checked?: SwitchBaseProps['checked']
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon?: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<CheckboxClasses>
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
    CheckboxPropsColorOverrides
  >
  /**
   * If `true`, the component is disabled.
   */
  disabled?: SwitchBaseProps['disabled']
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple?: SwitchBaseProps['disableRipple']
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon?: React.ReactNode
  /**
   * The id of the `input` element.
   */
  id?: SwitchBaseProps['id']
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate?: boolean
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon?: React.ReactNode
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: SwitchBaseProps['inputProps']
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<HTMLInputElement>
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange?: SwitchBaseProps['onChange']
  /**
   * If `true`, the `input` element is required.
   */
  required?: SwitchBaseProps['required']
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'small' | 'medium', CheckboxPropsSizeOverrides>
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value?: SwitchBaseProps['value']
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <MUICheckbox {...props} />
}

export default Checkbox
