import Home from '../pages/home';
import Login from '../pages/login';

export const privateRoutes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
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
