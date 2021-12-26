import Button from '@mui/material/Button'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/Inputs/Button',
  component: Button,
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
}) => {
  return (
    <Button variant="contained" sx={{ bgcolor: bgcolor }}>
      {children}
    </Button>
  )
}
export const Default = DefaultTemplate.bind({})
Default.args = {}
