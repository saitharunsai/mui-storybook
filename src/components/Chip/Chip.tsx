/* eslint-disable */
import MUIChip from '@mui/material/Chip'
import type { ChipTypeMap } from '@mui/material/Chip/Chip'
import type { OverrideProps } from '@mui/material/OverridableComponent'
import React from 'react'
/* eslint-enable */

export type ChipProps<
  D extends React.ElementType = ChipTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ChipTypeMap<P, D>, D>

const Chip: React.FC<ChipProps> = ({ label = 'Chip Filled', ...rest }) => {
  return <MUIChip label={label} {...rest} />
}

export default Chip
