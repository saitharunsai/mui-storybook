/* eslint-disable */
import MailIcon from '@mui/icons-material/Mail'
import MUIBadge from '@mui/material/Badge'
import type { BadgeTypeMap } from '@mui/material/Badge/Badge'
import type { OverrideProps } from '@mui/material/OverridableComponent'
import React from 'react'
/* eslint-enabile */

export type BadgeProps<
  D extends React.ElementType = BadgeTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<BadgeTypeMap<D, P>, D>

const Badge: React.FC<BadgeProps> = ({
  badgeContent = 4,
  color = 'primary',
  ...rest
}) => {
  return (
    <MUIBadge badgeContent={badgeContent} color={color} {...rest}>
      <MailIcon color="action" />
    </MUIBadge>
  )
}

export default Badge
