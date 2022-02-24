import MUIAlert from '@mui/material/Alert'
import React from 'react'

interface AlertProps {
  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color?: 'success' | 'info' | 'warning' | 'error'
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: 'standard' | 'filled' | 'outlined'
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @default 'Close'
   */
  closeText?: string
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity?: 'success' | 'info' | 'warning' | 'error'
}

const Alert: React.FC<AlertProps> = (props) => {
  return <MUIAlert {...props} />
}

export default Alert
