import React, { memo } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import App from './App'
import Counter from './Counter'

const Routing: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  </BrowserRouter>
)

export default memo(Routing)
