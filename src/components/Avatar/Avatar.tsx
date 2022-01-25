/* eslint-disable */
import MUIAvatar from '@mui/material/Avatar'
import type { AvatarTypeMap } from '@mui/material/Avatar/Avatar'
import type { OverrideProps } from '@mui/material/OverridableComponent'
import React from 'react'
/* eslint-enable */

export type AvatarProps<
  D extends React.ElementType = AvatarTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<AvatarTypeMap<P, D>, D>

const Avatar: React.FC<AvatarProps> = ({
  src = 'https://mui.com/static/images/avatar/1.jpg',
  ...rest
}) => {
  return <MUIAvatar src={src} {...rest} />
}

export default Avatar
