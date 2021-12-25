import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './default'

export default {
  title: 'MUI Default/Inputs/Button',
  component: Button,
} as ComponentMeta<any>

const DefaultTemplate: ComponentStory<any> = ({ children = 'Hello World' }) => {
  return <Button>{children}</Button>
}
export const Default = DefaultTemplate.bind({})
Default.args = {}
