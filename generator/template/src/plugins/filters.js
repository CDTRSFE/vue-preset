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
