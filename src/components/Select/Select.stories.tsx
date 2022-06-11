import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Select from './Select'

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>

export const Default: ComponentStory<typeof Select> = (props) => (
  <Select {...props} />
)
