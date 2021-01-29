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
    plugins: [
        // 'ejs',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
    }
};
