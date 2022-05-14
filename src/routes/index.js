import Home from '../pages/home';
import Login from '../pages/login';

export const privateRoutes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const appRoutes = [
    {
        path: 'auth/login',
        name: 'login',
        component: Login
    }
];

export default appRoutes;