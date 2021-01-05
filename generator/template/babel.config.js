let plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    ['transform-remove-console', { exclude: ['error', 'warn'] }],
    'transform-remove-debugger'
  ]);
}

module.exports = {
  plugins,
  presets: ['@vue/cli-plugin-babel/preset']
};
