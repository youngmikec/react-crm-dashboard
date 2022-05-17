// Application pages
import Home from '../pages/home';
import Login from '../pages/login';
import Clients from '../pages/clients';
import Products from '../pages/products';
import Team from '../pages/team';

export const privateRoutes = [
    {
        path: '/',
        name: 'Dashboard',
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
        component: Products
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
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
