<%_ if (v2) { _%>
import Vue from 'vue';
<% } %>
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

<%_ if (v2) { _%>
components.forEach(item => {
    Vue.component(item.name, item);
});
<%_ } else { _%>
export default {
    install(app) {
        components.forEach(({ default: item }) => {
            app.component(item.name, item);
        });
    }
};
<%_ } _%>
