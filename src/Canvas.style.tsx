import MuiContainer from '@mui/material/Container'
import { styled } from '@mui/system'

import { designToken } from '../designToken'

export const Container = styled(MuiContainer)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const sx = {
  card: {
    width: 275,
    height: 236,
    border: `1px solid ${designToken.palette.grey[300]}`,
  },
}
