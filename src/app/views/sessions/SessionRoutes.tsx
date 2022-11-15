import Loadable from '@/app/components/Loadable';
import { lazy } from 'react';

const NotFound: any = Loadable(lazy(() => import('./NotFound')));
const ForgotPassword: any = Loadable(lazy(() => import('./ForgotPassword')));
const JwtLogin: any = Loadable(lazy(() => import('./JwtLogin')));
const JwtRegister: any = Loadable(lazy(() => import('./JwtRegister')));

const sessionRoutes = [
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },
  { path: '/session/404', element: <NotFound /> },
];

export default sessionRoutes;
