import Home from '../pages/home';
import Login from '../pages/login';
import Clients from '../pages/clients';
import Team from '../pages/team';

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
        path: '/team',
        name: 'Team',
        component: Team
    },
    {
        path: '/products',
        name: 'Products',
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
        name: 'signup',
        component: Login
    },
];
