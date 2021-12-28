import { createTheme as createDesignToken } from '@mui/material/styles'

import tokenJson from './tokenJson'
import type { CreateDesignToken, DesignToken } from './types'
import { assertCast } from './types'
assertCast<CreateDesignToken>(createDesignToken)

export const designToken: DesignToken = createDesignToken(tokenJson)

export default createDesignToken
