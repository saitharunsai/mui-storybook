import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Autocomplete from './Autocomplete'

export default {
  title: 'MUI Default/Inputs/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<TODO>

const Template: ComponentStory<TODO> = (props) => <Autocomplete {...props} />

export const Default = Template.bind({})
Default.args = {}
