import { BadgePercent } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const salesRoute: PanelRoute = {
   id: RouteId.sales,
   path: PATH.sales,
   labelKey: 'nav.sales',
   icon: BadgePercent,
};
