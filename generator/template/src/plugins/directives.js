<%_ if (v2) { _%>
import Vue from 'vue';

<%_ } _%>
const directives = {
    //
};

<%_ if (v2) { _%>
Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key]);
});
<%_ } else { _%>
export default {
    install(app) {
        Object.keys(directives).forEach(key => {
            app.directive(key, directives[key]);
        });
    }
};
<%_ } _%>
