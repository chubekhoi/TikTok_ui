import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/UpLoad';
import Search from '~/pages/Search';
import { HeaderOnly } from '../components/Layout/';

// public routes
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
  {
    path: '/upLoad',
    component: UpLoad,
    layout: HeaderOnly,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
