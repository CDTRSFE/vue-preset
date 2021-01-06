/*
 * @Description: 全局过滤器
 * @Date: 2021-01-06 11:46:31
 */
const filters = {
    //
};

export default {
    install(app) {
        Object.keys(filters).forEach(key => {
            app.filter(key, filters[key]);
        });
    }
};
