import Home from '../pages/home';
import Login from '../pages/login';
import Clients from '../pages/clients';

export const privateRoutes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/clients',
        name: 'Clients',
        component: Clients
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
];

export const appRoutes = [
    {
        path: '/auth/login',
        name: 'login',
        component: Login
    },
    {
        path: '/auth/signup',
        name: 'login',
        component: Login
    },
];
