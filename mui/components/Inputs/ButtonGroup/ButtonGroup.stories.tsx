import type { ComponentMeta, ComponentStory } from '@storybook/react'

import ButtonGroup from './ButtonGroup'
import DemoComponents from './Demo'

export default {
  title: 'MUI Default/Inputs/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<TODO>

export const Demo: ComponentStory<TODO> = (props) => (
  <DemoComponents {...props} />
)
