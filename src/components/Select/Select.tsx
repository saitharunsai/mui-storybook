import MUISelect from '@mui/material/Select'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SelectProps {}

const Select: React.FC<SelectProps> = (props) => {
  return <MUISelect {...props} />
}

export default Select
