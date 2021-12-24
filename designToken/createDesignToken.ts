import { createTheme as createDesignToken } from '@mui/material/styles'

import tokenValuesJson from './tokenValuesJson'
import type { CreateDesignToken, DesignToken } from './types'
import { assertCast } from './types'
assertCast<CreateDesignToken>(createDesignToken)

export const designToken: DesignToken = createDesignToken(tokenValuesJson)

export default createDesignToken
