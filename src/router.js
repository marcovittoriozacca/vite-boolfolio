import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './components/pages/AppHome.vue';
import NotFound from './components/pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },

        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ]
})

export default router;