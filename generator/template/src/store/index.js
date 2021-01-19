<%_ if (v2) { _%>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
<%_ } else { _%>
import { createStore } from 'vuex';
<%_ } _%>

const files = require.context('./modules', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

const store =<% if (v2) { %> new Vuex.Store<% } else { %> createStore<% } %>({
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
