import {createWebHistory, createRouter} from "vue-router";

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Login from '../pages/Login.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'login',
        path: '/admin/login',
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
