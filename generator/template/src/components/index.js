/*
 * @Description: 公共组件注册入口（如果common里面没有文件，此代码需注释）
 * @Date: 2021-01-06 11:46:31
 */

const files = require.context('./common', true, /Index.vue$/);
const requireAll = context => context.keys().map(context);
const components = requireAll(files);

export default {
    install(app) {
        components.forEach(({ default: item }) => {
            app.component(item.name, item);
        });
    }
};
