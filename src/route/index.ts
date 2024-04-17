import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import index from '../views/index.vue';
import download from '../views/download.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'index',
                component: index
            },
            {
                path: '/download',
                name: 'download',
                component: download
            },
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
