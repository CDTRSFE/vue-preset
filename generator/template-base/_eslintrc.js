module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        <%_ if (version === 'v2') { _%>
        'plugin:vue/recommended',
        <%_ } else { _%>
        'plugin:vue/vue3-recommended',
        <%_ } _%>
        '@vue/standard',
        'tpconfig'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    globals: {
        _: 'readonly',
        axios: 'readonly'
    }
};
