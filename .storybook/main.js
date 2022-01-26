module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],

  addons: ['@storybook/addon-storysource', {
    name: '@storybook/addon-docs',
    options: {
      sourceLoaderOptions: {
        injectStoryParameters: false
      }
    }
  }, '@storybook/addon-controls', '@storybook/addon-backgrounds', '@storybook/addon-actions', '@storybook/addon-viewport', '@storybook/addon-toolbars'],
  core: {
    builder: 'webpack5'
  }
}
