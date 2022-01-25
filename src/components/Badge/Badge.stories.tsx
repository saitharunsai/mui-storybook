import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Badge from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

export const Default: ComponentStory<typeof Badge> = (props) => (
  <Badge {...props} />
)
