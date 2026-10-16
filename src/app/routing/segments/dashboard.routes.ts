import { LayoutGrid } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const dashboardRoute: PanelRoute = {
   id: RouteId.dashboard,
   path: PATH.dashboard,
   labelKey: 'nav.dashboard',
   icon: LayoutGrid,
};
