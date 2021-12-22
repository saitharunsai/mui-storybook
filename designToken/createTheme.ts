import type { Theme } from '@mui/material/styles'
import { createTheme as createDesignToken } from '@mui/material/styles'

import { muiDefault } from './MuiDefault'

const origin: Theme = createDesignToken(muiDefault)

export default origin
