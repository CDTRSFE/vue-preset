import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/Hello',
            name: 'Hello',
            component: () => import('@/components/normal/Hello.vue')
        }
    ]
});

export default router;

