import React, { memo } from 'react'

import { primary } from '../designToken'
import AppBar from '../mui/components/Surfaces/AppBar/AppBar'

const App: React.FC = () => {
  return (
    <div>
      <AppBar color={primary.main} />
    </div>
  )
}

export default memo(App)
