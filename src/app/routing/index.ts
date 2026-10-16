import { createElement } from 'react';
import { Navigate, type RouteObject } from 'react-router-dom';

import { PanelLayout } from '@/app/layout/PanelLayout';

import { mainLayoutChildRoutes } from './app-authenticated.shell';
import { publicRoutes } from './app-public.routes';
import { PATH } from './path-root';
import { RouteId } from './route-ids';
import { toRouteObjects } from './to-route-objects';

export { RouteId } from './route-ids';
export { mainLayoutChildRoutes } from './app-authenticated.shell';

/**
 * Public routes first, then the authenticated shell.
 * The index redirect is not a menu row; every other child comes from the sidebar definition.
 */
const authenticatedAppShell: RouteObject = {
   id: RouteId.appShell,
   path: '/',
   element: createElement(PanelLayout),
   children: [
      { index: true, element: createElement(Navigate, { to: `/${PATH.dashboard}`, replace: true }) },
      ...toRouteObjects(mainLayoutChildRoutes),
   ],
};

export const appRouteConfiguration: RouteObject[] = [...publicRoutes, authenticatedAppShell];

export default appRouteConfiguration;
