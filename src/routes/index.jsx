import routes from '~/config/routes';

import Auth from '~/pages/Auth';
import Create from '~/pages/Create';
import Home from '~/pages/Home';
import View from '~/pages/View';

const publicRoutes = [
    {
        path: '/',
        component: Auth,
    },
    {
        path: routes.create,
        component: Create,
    },
    {
        path: routes.view,
        component: View,
    },
    // {
    //     path: routes.auth,
    //     component: Auth,
    // },
    {
        path: routes.home,
        component: Home,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
