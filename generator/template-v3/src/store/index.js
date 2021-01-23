import { createStore } from 'vuex';

const files = require.context('./modules', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

const store = createStore ({
    state: {},
    mutations: {},
    actions: {},
    modules
});

if (module.hot) {
    module.hot.accept(files.id, () => {
        store.hotUpdate({
            modules
        });
    });
}

export default store;
