import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

import Backdrop from './default'

export default {
  title: 'MUI Default/Feedback/Backdrop',
  component: Backdrop,
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
  bgcolor = 'primary.main',
}) => <Backdrop sx={{ bgcolor: bgcolor }} open={true} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
