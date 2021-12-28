/* eslint-disable */
import type { CSSObject } from '@mui/styled-engine'
/* eslint-enable */
import type { SxProps } from './styleFunctionSx'

export default function sx<T extends object = {}>(styles: SxProps<T>): CSSObject
