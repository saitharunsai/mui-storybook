import React, { memo } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Canvas from './Canvas'
import Counter from './Counter'
import Index from './pages/Index'

const Routing: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/counter" element={<Counter />} />
      {process.env.NODE_ENV === 'development' && (
        <Route path="/canvas" element={<Canvas />} />
      )}
    </Routes>
  </BrowserRouter>
)

export default memo(Routing)
