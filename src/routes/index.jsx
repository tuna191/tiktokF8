import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';
import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import UploadPage from '~/pages/Upload';
import Profile from '~/pages/Profile';
export const publicRoutes = [
    {
        path: routesConfig.home,
        component: HomePage,
    },
    {
        path: routesConfig.following,
        component: FollowingPage,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: UploadPage,
        layout: HeaderOnly,
    },
];

export const privateRoutes = [];
