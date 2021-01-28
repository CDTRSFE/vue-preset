import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/plugins/axios';
import filters from '@/plugins/filters';
import directives from '@/plugins/directives';
import components from '@/components';
import 'tp-common.css';
import '@/assets/styles/public.less';
<%_ if (ui === 'element') { _%>
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI, {
    size: 'small'
});
<%_ } _%>

Vue.config.productionTip = false;

Vue.use(filters);
Vue.use(directives);
Vue.use(components);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
