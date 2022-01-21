/* eslint-disable */
import type { OverrideProps } from '@mui/material/OverridableComponent'
import MUISlider from '@mui/material/Slider'
import type { SliderTypeMap } from '@mui/material/Slider/Slider'
import React from 'react'
/* eslint-enable */

type SliderProps<
  D extends React.ElementType = SliderTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<SliderTypeMap<D, P>, D>

const Slider: React.FC<SliderProps> = (props) => {
  return <MUISlider {...props} />
}

export default Slider
