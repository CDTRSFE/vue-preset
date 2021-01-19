<%_ if (v2) { _%>
import Vue from 'vue';

<%_ } _%>
const filters = {
    //
};

<%_ if (v2) { _%>
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
<%_ } else { _%>
export default {
    install(app) {
        Object.keys(filters).forEach(key => {
            app.filter(key, filters[key]);
        });
    }
};
<%_ } _%>
