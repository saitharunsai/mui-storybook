import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { Stack } from '@mui/material'
import Slider from '@mui/material/Slider'
import { Box } from '@mui/system'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { paletteNameList } from '../../../../designToken'

export default {
  title: 'MUI Default/Inputs/Slider',
  component: Slider,
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
}) => <Slider sx={{ bgcolor: bgcolor }} />
export const Default = DefaultTemplate.bind({})

export const ContinuousSlider: ComponentStory<TODO> = () => {
  const [value, setValue] = React.useState<number>(30)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  )
}
