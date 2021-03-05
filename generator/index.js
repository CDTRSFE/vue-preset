module.exports = (api, options, rootOptions) => {
    // const v2 = options.vueVersion === 'v2';
    const v2 = options.version === 'v2';
    options.ui = options.ui || 'none';

    // 添加依赖
    const dependencies = {
        qs: '^6.7.0',
        axios: '0.18.0',
        'tp-common.css': '^1.0.1',
    };
    // UI 框架
    if (options.ui === 'element') {
        if (v2) {
            dependencies['element-ui'] = '^2.15.0';
        } else {
            dependencies['element-plus'] = '^1.0.1-beta.27';
        }
    }
    api.extendPackage({
        dependencies,
        devDependencies: {
            'eslint-config-tpconfig': '^0.x',
            'eslint-plugin-vue': '^7.0.0-0',
            'style-resources-loader': '^1.3.2',
            stylelint: '^13.9.0',
            '@trscd/stylelint-config-tpconfig': '^0.x',
            'stylelint-webpack-plugin': '^2.1.1',
            'webpack-bundle-analyzer': '^4.3.0',
            'babel-plugin-transform-remove-console': '^6.9.4',
            'babel-plugin-transform-remove-debugger': '^6.9.4',
        },
    });

    if (v2) {
        api.extendPackage({
            dependencies: {
                'vue-router': '^3.4.9',
                vuex: '^3.6.0',
            },
        });
    } else {
        api.extendPackage({
            dependencies: {
                vue: '^3.0.0',
                'vue-router': '^4.0.0-0',
                vuex: '^4.0.0-0',
            },
            devDependencies: {
                'vue-template-compiler': null,
                '@vue/compiler-sfc': '^3.0.0',
            },
        });
    }

    // 数据可视化大屏依赖
    if (options.type === 'data-v') {
        api.extendPackage({
            dependencies: {
                echarts: '^5.0.0',
                'animate.css': '^4.1.1',
            },
        });
    }

    // git hook and commitlint
    api.extendPackage({
        scripts: {
            stylelint: 'stylelint \'src/**/*.{vue,html,css,less,scss,sass}\' --fix',
        },
        husky: {
            hooks: {
                'pre-commit': 'lint-staged',
                'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
            },
        },
        'lint-staged': {
            '*.{js,vue}': 'npm run lint',
            '*.{vue,html,css,less,scss,sass}': 'npm run stylelint',
        },
        config: {
            commitizen: {
                path: './node_modules/cz-conventional-changelog',
            },
        },
        devDependencies: {
            '@commitlint/cli': '^11.0.0',
            '@commitlint/config-conventional': '^11.0.0',
            'cz-conventional-changelog': '^3.3.0',
            husky: '^4.3.8',
            'lint-staged': '^10.5.3',
        },
    });

    // 删除不必要的文件
    api.render(files => {
        Object.keys(files).forEach(path => {
            const templatePath = [
                'src/assets/logo.png',
                'src/App.vue',
                'src/components/HelloWorld.vue',
            ];
            if (templatePath.includes(path)) {
                delete files[path];
            }
        });
    });

    // 创建模板
    api.render('./template-base', options);
    if (v2) {
        api.render('./template', options);
    } else {
        api.render('./template-v3', options);
    }
};
