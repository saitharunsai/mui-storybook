import { palette } from './index'

export const getColor = (str: string) => {
  const arr = str.split('.')
  // @ts-ignore
  return palette[arr[0]][arr[1]]
}
