import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'MUI Default/DataDisplay/Tooltip',
  component: Tooltip,
} as ComponentMeta<TODO>

const DefaultTemplate: ComponentStory<TODO> = () => (
  <Tooltip title="Delete">
    <IconButton>
      <DeleteIcon />
    </IconButton>
  </Tooltip>
)

export const Default = DefaultTemplate.bind({})
Default.args = {}
