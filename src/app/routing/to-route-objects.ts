import { createElement } from 'react';
import { Navigate, Outlet, type RouteObject } from 'react-router-dom';

import type { PanelRoute, PanelRouteHandle } from './types';

const handleOf = (route: PanelRoute): PanelRouteHandle => ({ labelKey: route.labelKey });

/** `load` becomes `route.lazy` so the page chunk stays out of the shell bundle. */
const lazyOf = (load: NonNullable<PanelRoute['load']>): Pick<RouteObject, 'lazy'> => ({
   lazy: async () => {
      const module = await load();
      return { Component: module.default };
   },
});

/**
 * Leaf routes render nothing, so the shell outlet stays empty until a screen is attached.
 * A group renders `Outlet` (or its own `load` layout) and sends `/segment` to its first child.
 */
export const toRouteObjects = (routes: PanelRoute[]): RouteObject[] =>
   routes.map((route) => {
      const children = route.children ?? [];
      const handle = handleOf(route);
      const lazy = route.load ? lazyOf(route.load) : {};

      if (children.length === 0) return { id: route.id, path: route.path, handle, ...lazy };

      return {
         id: route.id,
         path: route.path,
         handle,
         ...lazy,
         ...(route.load ? {} : { element: createElement(Outlet) }),
         children: [
            {
               index: true,
               element: createElement(Navigate, { to: children[0].path, replace: true }),
            },
            ...toRouteObjects(children),
         ],
      };
   });
