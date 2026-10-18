import { Palette } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const uiKitRoute: PanelRoute = {
   id: RouteId.uiKit,
   path: PATH.uiKit,
   labelKey: 'nav.uiKit',
   icon: Palette,
   load: () => import('@/app/pages/antd-showcase-page'),
};
