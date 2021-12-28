import { CardContent } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Container from '@mui/material/Container'
import Text from '@mui/material/Typography'
import React from 'react'

import { sx } from './Canvas.style'

const Canvas: React.FC = () => {
  return (
    <Container sx={sx.container}>
      <Card sx={sx.card}>
        <CardContent sx={{ width: 275, height: 184 }}>
          <Text variant="body2" color="text.secondary" sx={{ height: 28 }}>
            Product
          </Text>
          <Text variant="h5">MINELAL WATER</Text>
          <Text variant="body2" color="text.secondary" sx={{ height: 32 }}>
            1500ml
          </Text>
          <Text variant="body2">
            Harness the power of the volcano and give yourself the lift you need
            with the water.
          </Text>
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
    </Container>
  )
}

export default Canvas
