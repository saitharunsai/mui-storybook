/* eslint-disable */
import MUIPaper from '@mui/material/Paper'
import type { PaperPropsVariantOverrides } from '@mui/material/Paper/Paper'
import type { PaperClasses } from '@mui/material/Paper/paperClasses'
import type { Theme } from '@mui/material/styles'
import type { SxProps } from '@mui/system'
import type { OverridableStringUnion } from '@mui/types'
import React from 'react'
/* eslint-enable */

interface PaperProps {
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<PaperClasses>
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation?: number
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square?: boolean
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant?: OverridableStringUnion<
    'elevation' | 'outlined',
    PaperPropsVariantOverrides
  >
}

const Paper: React.FC<PaperProps> = (props) => {
  return <MUIPaper {...props} />
}

export default Paper
