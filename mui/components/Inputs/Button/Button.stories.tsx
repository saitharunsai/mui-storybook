import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './Button'

export default {
  title: 'MUI Default/Inputs/Button',
  component: Button,
} as ComponentMeta<any>

const Template: ComponentStory<any> = (props) => <Button {...props} />

export const Default = Template.bind({})
Default.args = {}
