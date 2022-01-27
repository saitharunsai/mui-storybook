import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import muiTheme from './MuiTheme';

addons.setConfig({
  theme: muiTheme
})
