import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import CircularProgress from './CircularProgress'

export default {
  title: 'Components/CircularProgress',
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>

export const Default: ComponentStory<typeof CircularProgress> = (props) => (
  <CircularProgress {...props} />
)
