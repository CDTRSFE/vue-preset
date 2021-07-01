import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: () => import('@/views/Hello.vue'),
        },
    ],
});

export default router;
