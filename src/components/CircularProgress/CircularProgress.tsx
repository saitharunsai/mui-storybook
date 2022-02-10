import MUICircularProgress from '@mui/material/CircularProgress'
import React from 'react'

// @ts-ignore Interface 'CircularProgressProps' incorrectly extends interface 'Omit<HTMLAttributes<HTMLSpanElement>, "classes"> & StyledComponentProps<"children"> & { className?: string; ref?: Ref<...>; style?: CSSProperties; }'.
export interface CircularProgressProps {
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
    | 'inherit'
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink?: boolean
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g '3rem'.
   * @default 40
   */
  size?: number
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness?: number
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value?: number
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant?: 'determinate' | 'indeterminate'
}

const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  return <MUICircularProgress {...props} />
}

export default CircularProgress
