import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const Detail = lazy(() => import('@/pages/Detail'));

export default [
  {
    path: '/',
    Element: Home,
  },
  {
    path: ':id',
    Element: Detail,
  },
];
