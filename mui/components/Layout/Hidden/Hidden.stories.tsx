import Hidden from '@mui/material/Hidden'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'MUI Default/Layout/Hidden',
  component: Hidden,
} as ComponentMeta<TODO>

const DefaultTemplate: ComponentStory<TODO> = ({
  children = 'Hello World',
}) => <Hidden children={children} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
