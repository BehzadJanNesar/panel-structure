import { createElement } from 'react';
import type { MenuProps } from 'antd';

import type { PanelRoute } from './types';

type Translate = (key: string) => string;

const joinPath = (parent: string, path: string) => {
   const combined = `${parent}/${path}`.replace(/\/{2,}/g, '/');
   return combined.startsWith('/') ? combined : `/${combined}`;
};

/** Menu keys are absolute paths so `selectedKeys` can follow `location.pathname`. */
export const toMenuItems = (
   routes: PanelRoute[],
   translate: Translate,
   parent = '',
): NonNullable<MenuProps['items']> =>
   routes.map((route) => {
      const key = joinPath(parent, route.path);
      const icon = createElement(route.icon, { size: 18, strokeWidth: 1.75 });
      const label = translate(route.labelKey);
      const children = route.children ?? [];

      if (children.length === 0) return { key, icon, label };

      return {
         key,
         icon,
         label,
         children: toMenuItems(children, translate, key),
      };
   });
