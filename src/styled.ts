import type { SxProps } from '@mui/system'
// import { width } from '@mui/system'

import { designToken } from '../designToken'

export const sx: { [Key in string]?: SxProps } = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 275,
    height: 236,
    border: `1px solid ${designToken.palette.grey[300]}`,
  },
}
