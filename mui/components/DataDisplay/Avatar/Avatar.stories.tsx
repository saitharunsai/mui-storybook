import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

import Avatar from './default'

export default {
  title: 'MUI Default/DataDisplay/Avatar',
  component: Avatar,
  argTypes: {
    bgcolor: {
      description: 'bgcolor',
      options: paletteNameList,
      control: {
        type: 'radio',
        labels: paletteNameList,
      },
    },
  },
} as ComponentMeta<TODO>

const DefaultTemplate: ComponentStory<TODO> = ({
  children = 'Hello World',
  bgcolor = 'primary.main',
}) => <Avatar sx={{ bgcolor: bgcolor }} children={children} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
