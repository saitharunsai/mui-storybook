import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

import Tooltip from './default'

export default {
  title: 'MUI Default/DataDisplay/Tooltip',
  component: Tooltip,
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
}) => <Tooltip title={children} children={children} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
