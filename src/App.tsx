import React, { memo } from 'react'

import { primary } from '../designToken'
import Default from '../mui/components/Inputs/Button'
import Demo from '../mui/components/Surfaces/AppBar'

const App: React.FC = () => {
  return (
    <div>
      <Demo color={primary.main} />
      <Default />
    </div>
  )
}

export default memo(App)
