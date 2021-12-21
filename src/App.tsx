import React, { memo } from 'react'

import AppBar from './components/AppBar'

const App: React.FC = () => {
  return (
    <div>
      <AppBar />
    </div>
  )
}

export default memo(App)
