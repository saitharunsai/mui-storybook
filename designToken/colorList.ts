import {
  common,
  error,
  info,
  primary,
  secondary,
  success,
  warning,
} from './selector'
import type {
  ColorList,
  Common,
  Error,
  Info,
  Primary,
  Secondary,
  Success,
  Warning,
} from './types'
import { assertCast } from './types'

export let colorList: ColorList[] = []

assertCast<Common>(common)
assertCast<Primary>(primary)
assertCast<Secondary>(secondary)
assertCast<Error>(error)
assertCast<Info>(info)
assertCast<Warning>(warning)
assertCast<Success>(success)

colorList = [common.white, common.black]

const mainPalettes = [primary, secondary, error, info, warning, success]

mainPalettes.forEach(({ main, light, dark, contrastText }) => {
  colorList = [main, light, dark, contrastText, ...colorList]
})
