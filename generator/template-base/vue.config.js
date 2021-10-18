const path = require('path');
// const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.example.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '',
                },
            },
        },
    },
    publicPath: '',
    chainWebpack: config => {
        // 自动导入 resources.less 文件
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => {
            config.module
                .rule('less')
                .oneOf(type)
                .use('style-resource')
                .loader('style-resources-loader')
                .options({
                    patterns: [path.resolve(__dirname, './src/assets/styles/resources.less')],
                });
        });
        config
            .plugin('style-lint')
            .use(StyleLintPlugin, [
                {
                    files: ['src/**/*.{vue,html,css,less,scss,sass}'],
                },
            ]);
    },
};
