module.exports = [
    {
        type: 'list',
        name: 'version',
        message: 'Choose a version of Vue.js',
        choices: [
            {
                name: '2.x',
                value: 'v2',
            },
            {
                name: '3.x',
                value: 'v3',
            },
        ],
        default: 'v2',
    },
    {
        type: 'list',
        name: 'type',
        message: 'What type of project do you want to create?',
        choices: [
            {
                name: 'default project',
                value: 'default',
            },
            {
                name: 'data visualization project',
                value: 'data-v',
            },
        ],
    },
    {
        name: 'ui',
        type: 'list',
        message: 'Choice a UI Framework',
        choices: [
            {
                name: 'none',
                value: 'none',
            },
            {
                name: 'Element UI',
                value: 'element',
            },
        ],
        when: (answers) => answers.type === 'default',
        default: 'none',
    },
];
