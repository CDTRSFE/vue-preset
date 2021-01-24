import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from '@/plugins/axios';
import filters from '@/plugins/filters';
import directives from '@/plugins/directives';
import components from '@/components';
import 'tp-common.css';
import '@/assets/styles/public.less';
<%_ if (ui === 'element') { _%>
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
<%_ } _%>

createApp(App)
    .use(store)
    .use(router)
    .use(axios)
    .use(filters)
    .use(directives)
    .use(components)
    <%_ if (ui === 'element') { _%>
    .use(ElementPlus)
    <%_ } _%>
    .mount('#app');
    