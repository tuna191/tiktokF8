import { HeaderOnly } from '~/components/Layout';
import HomePage from '~/pages/Home';
import FollowingPage from '~/pages/Following';
import UploadPage from '~/pages/Upload';
export const publicRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/following',
        component: FollowingPage,
    },
    {
        path: '/upload',
        component: UploadPage,
        layout: HeaderOnly,
    },
];

export const privateRoutes = [];
