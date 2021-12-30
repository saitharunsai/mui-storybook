import type { SxProps } from '@mui/system'

import { designToken } from '../designToken'

export const sx: { [Key in string]?: SxProps } = {
  card: {
    width: 275,
    height: 236,
    border: `1px solid ${designToken.palette.grey[300]}`,
  },
}
