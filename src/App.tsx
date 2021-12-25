import React, { memo } from 'react'

import { primary } from '../designToken'
import Button from '../mui/components/Inputs/Button'
import Demo from '../mui/components/Surfaces/AppBar'

const App: React.FC = () => {
  return (
    <div>
      <Demo color={primary.main} />
      <Button />
    </div>
  )
}

export default memo(App)
