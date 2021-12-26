module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    },
    {
      type: 'input',
      name: 'folder',
      message: 'folder in components',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'mui/components/{{folder}}/{{properCase name}}/{{properCase name}}.stories.tsx',
      templateFile: 'generators/component/Component.stories.tsx.hbs',
    },
  ],
}
