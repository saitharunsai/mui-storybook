import { render, screen } from '@testing-library/react'
import React from 'react'

import MinelalWater from './'

test('MinelalWater', () => {
  render(<MinelalWater />)

  expect(screen.getByText('MINELAL WATER')).toBeInTheDocument()
})
