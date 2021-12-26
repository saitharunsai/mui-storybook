import Pagination from '@mui/material/Pagination'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/Navigation/Pagination',
  component: Pagination,
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
}) => <Pagination sx={{ bgcolor: bgcolor }} />

export const Default = DefaultTemplate.bind({})
Default.args = {}
