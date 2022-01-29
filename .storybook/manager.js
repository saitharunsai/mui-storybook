import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import muiBrandTheme from './MuiBrandTheme'

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: false,
    panelPosition: 'bottom',
    enableShortcuts: true,
    isToolshown: true,
    theme: muiBrandTheme,
    selectedPanel: undefined,
    initialActive: 'sidebar',
    sidebar: {
      showRoots: true,
      collapsedRoots: ['other']
    },
    toolbar: {
      title: { hidden: false },
      zoom: { hidden: false },
      eject: { hidden: false },
      copy: { hidden: false },
      fullscreen: { hidden: false }
    }
  }
)
