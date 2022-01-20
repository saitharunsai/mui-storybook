import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Switch from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

export const Default: ComponentStory<typeof Switch> = (props) => (
  <Switch {...props} />
)
