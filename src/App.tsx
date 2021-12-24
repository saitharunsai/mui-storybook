import React, { memo } from 'react'

import { primary } from '../designToken'
import Button from '../mui/components/Inputs/Button'
import AppBar from '../mui/components/Surfaces/AppBar'

const App: React.FC = () => {
  return (
    <div>
      <AppBar color={primary.main} />
      <Button />
    </div>
  )
}

export default memo(App)
