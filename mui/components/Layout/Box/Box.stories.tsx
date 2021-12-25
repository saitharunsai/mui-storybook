import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

import Box from './default'

export default {
  title: 'MUI Default/Layout/Box',
  component: Box,
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
}) => <Box sx={{ bgcolor: bgcolor }} children={children} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
