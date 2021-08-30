let plugins = [];

if (process.env.NODE_ENV === 'production') {
    plugins = plugins.concat([['transform-remove-console', { exclude: ['error', 'warn'] }]]);
}

module.exports = {
    plugins,
    presets: ['@vue/cli-plugin-babel/preset'],
};
