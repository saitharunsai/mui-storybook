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

import {
  common,
  error,
  info,
  primary,
  secondary,
  success,
  warning,
} from './index'

export const colorList: ColorList[] = []

function assertCast<T>(v: any): asserts v is T {}
assertCast<Common>(common)
assertCast<Primary>(primary)
assertCast<Secondary>(secondary)
assertCast<Error>(error)
assertCast<Info>(info)
assertCast<Warning>(warning)
assertCast<Success>(success)

colorList.push(common.white)
colorList.push(common.black)

const mainPalettes = [primary, secondary, error, info, warning, success]

mainPalettes.forEach(({ main, light, dark, contrastText }) => {
  colorList.push(main)
  colorList.push(light)
  colorList.push(dark)
  colorList.push(contrastText)
})
