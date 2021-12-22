import React, { memo } from 'react'

import designToken from '../designToken'
import AppBar from '../mui/components/AppBar'

const App: React.FC = () => {
  return (
    <div>
      <AppBar bgColor="primary.dark" />
    </div>
  )
}

export default memo(App)
