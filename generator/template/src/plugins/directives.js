/*
 * @Description: 全局指令
 * @Date: 2021-01-06 11:46:31
 */
const directives = {
    //
};

export default {
    install(app) {
        Object.keys(directives).forEach(key => {
            app.directive(key, directives[key]);
        });
    }
};
