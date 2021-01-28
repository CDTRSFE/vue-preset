module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        '@vue/standard',
        'tpconfig',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    },
    globals: {
        _: 'readonly',
        axios: 'readonly',
    },
    rules: {
        'vue/script-indent': ['error', 4, { baseIndent: 0, switchCase: 1 }],
    }
};