import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Slider from './Slider'

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>

export const Default: ComponentStory<typeof Slider> = (props) => (
  <Slider {...props} />
)
