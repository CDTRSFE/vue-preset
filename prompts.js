module.exports = [
  {
    type: 'list',
    name: 'type',
    message: 'What type of project do you want to create?',
    choices: [
      {
        name: 'default project',
        value: 1
      },
      {
        name: 'data visualization project',
        value: 2
      }
    ]
  }
]
