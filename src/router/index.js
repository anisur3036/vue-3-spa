import {createWebHistory, createRouter} from "vue-router";

import About from '../pages/About.vue';
import Login from '../pages/Login.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('../pages/Home.vue')
    },
    {
        name: 'post',
        path: '/posts/:slug',
        // props: true,
        component: () => import(/* webpackChunkName: "Single Post Page" */'../pages/Post.vue'),
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
