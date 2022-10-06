import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const Detail = lazy(() => import('@/pages/Detail'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export default [
  {
    path: '/',
    Element: Home,
  },
  {
    path: '/pokemon/:id',
    Element: Detail,
  },
  {
    path: '/*',
    Element: NotFound,
  },
];
