/* eslint-disable */
import MUIChip from '@mui/material/Chip'
import React from 'react'
import { OverridableStringUnion } from '@mui/types'
import { ChipPropsColorOverrides } from '@mui/material/Chip/Chip'
import { ChipPropsSizeOverrides } from '@mui/material/Chip/Chip'
import { ChipPropsVariantOverrides } from '@mui/material/Chip/Chip'
import { HTMLAttributes } from 'react'
/* eslint-enable */

export interface ChipProps {
  label?: string
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable?: boolean
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color?: OverridableStringUnion<
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning',
    ChipPropsColorOverrides
  >
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'small' | 'medium', ChipPropsSizeOverrides>
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant?: OverridableStringUnion<
    'filled' | 'outlined',
    ChipPropsVariantOverrides
  >
}

const Chip: React.FC<ChipProps> = ({ label = 'Chip Filled', ...rest }) => {
  // @ts-ignore
  return <MUIChip label={label} {...rest} />
}

export default Chip
