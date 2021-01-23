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
