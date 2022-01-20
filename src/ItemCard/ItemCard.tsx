import { CardContent } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Text from '@mui/material/Typography'
import React from 'react'

import { sx } from './styled'

export interface Props {
  header?: string
  title?: string
  description?: 'any' | 'many' | 'semver'
  size?: '500' | '1500' | '2000'
}

export const ItemCard: React.FC<Props> = ({
  header = 'header',
  description,
  title = 'title',
  size = '1500',
}) => {
  return (
    <Card sx={sx.card}>
      <CardContent sx={{ width: 275, height: 184 }}>
        <Text variant="body2" color="text.secondary" sx={{ height: 28 }}>
          {header}
        </Text>
        <Text variant="h5">{title}</Text>
        <Text variant="body2" color="text.secondary" sx={{ height: 32 }}>
          {size}ml
        </Text>
        <Text variant="body2">{description ? description : 'none'}</Text>
      </CardContent>
      <CardActions
        sx={{
          width: 275,
          height: 52,
          display: 'flex',
          alignItems: 'end',
        }}
      >
        <Button variant="text" size="medium" color="primary">
          <Text variant="button">MORE</Text>
        </Button>
      </CardActions>
    </Card>
  )
}
