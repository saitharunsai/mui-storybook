import { designToken } from '../designToken'

export const sx = {
  card: {
    width: 275,
    height: 236,
    border: `1px solid ${designToken.palette.grey[300]}`,
  },
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
