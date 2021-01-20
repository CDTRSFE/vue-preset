module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        <%_ if (v2) { _%>
        'plugin:vue/essential',
        '@vue/standard',
        <%_ } else { _%>
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        <%_ } _%>
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
