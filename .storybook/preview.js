import React from 'react'
import { CssBaseline } from '@mui/material'
import { DesignTokenProvider, designToken } from '../src/designToken'
import { themes } from '@storybook/theming'
import muiBrandTheme from './MuiBrandTheme'

export const parameters = {
  viewMode: 'docs',
  docs: {
    theme: muiBrandTheme
  },
  options: {
    storySort: {
      order: ['Default']
    }
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff'
      },
      {
        name: 'dark',
        value: 'rgb(10, 25, 41)'
      },
      {
        name: 'twitter',
        value: '#00aced'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      }
    ],
    grid: {
      disable: true
    }
  },
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: '^on.*' },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true
  }
}

export const decorators = [(Story) =>
  (
    <DesignTokenProvider theme={designToken}>
      <CssBaseline/>
      <Story/>
    </DesignTokenProvider>)
]
