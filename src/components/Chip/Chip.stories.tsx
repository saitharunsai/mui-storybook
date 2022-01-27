import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Chip from './Chip'

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

export const Default: ComponentStory<typeof Chip> = (props) => (
  <Chip {...props} />
)
