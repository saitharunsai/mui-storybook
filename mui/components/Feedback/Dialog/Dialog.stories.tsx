import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

import Dialog from './default'

export default {
  title: 'MUI Default/Feedback/Dialog',
  component: Dialog,
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
}) => <Dialog sx={{ bgcolor: bgcolor }} open={true} children={children} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
