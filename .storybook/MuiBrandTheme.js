// .storybook/YourTheme.js

import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  colorPrimary: '#3399FF',
  colorSecondary: 'rgb(0, 76, 153)',

  // UI
  appBg: '#001E3C',
  appContentBg: '#0A1929',
  appBorderColor: 'rgba(194, 224, 255, 0.08)',
  appBorderRadius: 10,

  // Typography
  fontBase: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  fontCode: 'Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace',

  // Text colors
  textColor: '#fff',
  textInverseColor: '#B2BAC2',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: 'rgb(0, 30, 60)',
  barBg: 'rgb(0, 127, 255)',

  // Form colors
  inputBg: 'rgb(0, 30, 60)',
  inputBorder: 'rgb(102, 178, 255)',
  inputTextColor: 'rgb(102, 178, 255)',
  inputBorderRadius: 10,

  brandTitle: 'MUI Storybook',
  brandUrl: 'https://mui.com/',
  brandImage: 'https://pbs.twimg.com/media/E_aj11YVcA4uZOT?format=jpg'
})
