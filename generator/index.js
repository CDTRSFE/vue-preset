module.exports = (api, options) => {
  // 创建模板
  api.render('./template');

  // 引入样式文件
  // api.injectImports(api.entryFile, `import '../public/styles/reset.css'`);
  // api.injectImports(api.entryFile, `import '../public/styles/common.css'`);
  // api.injectImports(api.entryFile, `import '@/assets/styles/resources.less'`);

  // 引入 plugins
  api.injectImports(api.entryFile, `import axios from '@/plugins/axios'`);
  api.injectImports(api.entryFile, `import directives from '@/plugins/directives'`);
  api.injectImports(api.entryFile, `import filters from '@/plugins/filters'`);

  // 引入全局组件
  api.injectImports(api.entryFile, `import components from '@/components/index.js'`);

  // 注入 plugins
  api.transformScript(api.entryFile, require('./injectUsePlugin'));

  // 添加依赖
  let dependencies = {
    'qs': '^6.7.0',
    'axios': '0.18.0'
  };
  // 数据可视化大屏依赖
  if (options.type === 2) {
    dependencies = {
      ...dependencies,
      'echarts': '^5.0.0',
      'animate.css': '^4.1.1'
    }
  }
  api.extendPackage({
    dependencies,
    devDependencies: {
      'style-resources-loader': '^1.3.2',
      'stylelint': '^13.7.2',
      'stylelint-config-standard': '^20.0.0',
      'stylelint-webpack-plugin': '^2.1.1',
      'webpack-bundle-analyzer': '^4.3.0',
      'babel-plugin-transform-remove-console': '^6.9.4',
      'babel-plugin-transform-remove-debugger': '^6.9.4'
    }
  })
}
