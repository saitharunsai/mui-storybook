import designToken from './index'

const palette = designToken.palette

export const colors = {
  primary: { ...palette.primary },
  secondaly: { ...palette.secondary },
  error: { ...palette.error },
  warning: { ...palette.warning },
  info: { ...palette.info },
  success: { ...palette.success },
}
