import CheckIcon from '@mui/icons-material/Check'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CloseIcon from '@mui/icons-material/Close'
import MUIAlert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Alert from './Alert'

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>

export const Default: ComponentStory<typeof Alert> = (props) => (
  <Alert {...props} />
)

export function BasicAlerts1() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <MUIAlert severity="error">
        This is an error alert — check it out!
      </MUIAlert>
      <MUIAlert severity="warning">
        This is a warning alert — check it out!
      </MUIAlert>
      <MUIAlert severity="info">This is an info alert — check it out!</MUIAlert>
      <MUIAlert severity="success">
        This is a success alert — check it out!
      </MUIAlert>
    </Stack>
  )
}

export function BasicAlerts2() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <MUIAlert variant="outlined" severity="error">
        This is an error alert — check it out!
      </MUIAlert>
      <MUIAlert variant="outlined" severity="warning">
        This is a warning alert — check it out!
      </MUIAlert>
      <MUIAlert variant="outlined" severity="info">
        This is an info alert — check it out!
      </MUIAlert>
      <MUIAlert variant="outlined" severity="success">
        This is a success alert — check it out!
      </MUIAlert>
    </Stack>
  )
}

export function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <MUIAlert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </MUIAlert>
      <MUIAlert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </MUIAlert>
      <MUIAlert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </MUIAlert>
      <MUIAlert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </MUIAlert>
    </Stack>
  )
}
export function ActionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <MUIAlert onClose={() => {}}>
        This is a success alert — check it out!
      </MUIAlert>
      <MUIAlert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </MUIAlert>
    </Stack>
  )
}

export function TransitionAlerts() {
  const [open, setOpen] = React.useState(true)

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <MUIAlert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </MUIAlert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true)
        }}
      >
        Re-open
      </Button>
    </Box>
  )
}

export function IconAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <MUIAlert icon={<CheckIcon fontSize="inherit" />} severity="success">
        This is a success alert — check it out!
      </MUIAlert>
      <MUIAlert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        This is a success alert — check it out!
      </MUIAlert>
      <MUIAlert icon={false} severity="success">
        This is a success alert — check it out!
      </MUIAlert>
    </Stack>
  )
}

export function ColorAlerts() {
  return (
    <MUIAlert severity="success" color="info">
      This is a success alert — check it out!
    </MUIAlert>
  )
}
