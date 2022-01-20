import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
)
