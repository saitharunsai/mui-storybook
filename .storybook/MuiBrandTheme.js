// .storybook/YourTheme.js

import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  colorPrimary: 'rgb(51, 153, 255)',
  colorSecondary: 'rgb(0, 30, 60)',

  // UI
  appBg: 'rgb(0, 30, 60)',
  appContentBg: 'rgb(10, 25, 41)',
  appBorderColor: 'rgb(19, 47, 76)',
  appBorderRadius: 10,

  // Typography
  fontBase: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  fontCode: 'Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace',

  // Text colors
  textColor: '#fff',
  textInverseColor: '#fff',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: 'rgb(19, 47, 76)',
  barBg: 'rgb(51 153 255)',

  // Form colors
  inputBg: 'rgb(0, 30, 60)',
  inputBorder: 'rgb(102, 178, 255)',
  inputTextColor: 'rgb(125 222 255)',
  inputBorderRadius: 10,

  brandTitle: 'MUI Storybook',
  brandUrl: 'https://mui.com/',
  brandImage: 'https://pbs.twimg.com/media/E_aj11YVcA4uZOT?format=jpg'
})
