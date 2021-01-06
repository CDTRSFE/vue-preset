# vue-cli-plugin-tp-template

Vue CLI 4.x 用于生成自定义模板的 preset，包含了创建项目时所需的选项和插件，以及自定义的模板文件。所预设的插件和配置有：Vue3、Less、Axios、Router、Vuex、StyleLint、Eslint、Babel。

模板存放在 `/generator/template`，创建项目时自动生成，空文件和文件夹会被忽略，模板需要考虑[文件名的边界情况](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E6%96%87%E4%BB%B6%E5%90%8D%E7%9A%84%E8%BE%B9%E7%95%8C%E6%83%85%E5%86%B5)，以点开头的模板需要使用下划线取代那个点，以下划线开头的文件需要使用两个下划线来取代单个下划线。

## 使用

```bash
$ vue create --preset tp-template project-name
$ cd project-name
$ npm run serve
```

创建过程中会有选择项目类型的提示，如果选择 `data visualization project` (数据可视化大屏项目)，会额外安装 `echarts` `animate.css`。

## 样式相关

`public/styles` 目录下放了两个 CSS 文件，一个是样式重置，一个是高频率使用的一些 class，在 `public/index.html` 文件中引入。

项目采用 less 作为 CSS 预处理器，`src/assets/styles/` 目录下放了一个 `resources.less` 文件，用于存放一些全局的变量或 mixin 等。此文件[自动导入](https://cli.vuejs.org/zh/guide/css.html#%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BC%E5%85%A5)到每个单文件组件和 less 文件里。

在 vue.config.js 中已配置 `style-resources-loader`，无需再使用 `vue add style-resources-loader` 安装 [vue-cli-plugin-style-resources-loader](https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader) 了。

## 字体文件

iconfont 和其他字体文件都放在 `public` 文件夹下，在 `public/index.html` 引入对应的 CSS / js 文件。建议在 `public/iconfont/info.md` 文件中记录图标库的地址和登录账号，方便后续维护。

```
.
├── font
│   ├── f.ttf
│   └── font.css
└── iconfont
    ├── f.ttf
    └── iconfont.css
```

```html
<!-- index.html -->
<head>
    <link rel="stylesheet" href="<%= BASE_URL %>iconfont/f.css" />
    <link rel="stylesheet" href="<%= BASE_URL %>font/f.css" />
</head>
```

## 组件

公用组件放在 `src/components/` 下，`common/` 目录存放全局公用组件，为了方便自动全局注册，以及考虑到复杂组件需要拆分成多个文件的情况，每个全局组件都放在单独的文件夹里，并至少包含一个 `index.vue` 作为入口。其他公用组件放在 `normal/` 里，使用时引入。

## 指令/过滤器

指令放在 `src/plugins/directives.js` 里，过滤器放在 `src/plugins/filters.js` 里，都是自动全局注册。

## Vuex

为了避免 store 对象变得臃肿，根据业务把 store 拆分成带命名空间的模块，所有模块放在 `src/store/modules/` 下，实例化 `vuex` 之前自动导入 `modules` 下的所有模块，并开启热更新。

## ESLint

## style-lint

## 版本日志

## babel

使用了 [transform-remove-debugger](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-debugger) 和 [transform-remove-console](https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console)，生产环境代码删除 `console` 和 `debugger`。

## 总结
