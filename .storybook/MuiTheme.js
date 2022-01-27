// .storybook/YourTheme.js

import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  colorPrimary: '#3399FF',
  colorSecondary: 'deepskyblue',

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
  barTextColor: 'silver',
  barSelectedColor: 'rgb(0, 30, 60)',
  barBg: 'rgb(0, 127, 255)',

  // Form colors
  inputBg: 'rgb(10, 25, 41)',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://place-hold.it/350x150'
})
