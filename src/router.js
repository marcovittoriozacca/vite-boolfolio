import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './components/pages/AppHome.vue';
import NotFound from './components/pages/NotFound.vue';
import AppProjects from './components/pages/AppProjects.vue';
import ProjectShow from './components/pages/ProjectShow.vue';
import ContactUs from './components/pages/ContactUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects,
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: ProjectShow,
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs,
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        },
    ]
})

export { router };