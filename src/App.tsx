import React, { memo } from 'react'

import { primary } from '../designToken'
import AppBar from '../mui/components/AppBar'

const App: React.FC = () => {
  return (
    <div>
      <AppBar bgColor={primary.main} />
    </div>
  )
}

export default memo(App)
