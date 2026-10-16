import { ChartColumn } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const reportsRoute: PanelRoute = {
   id: RouteId.reports,
   path: PATH.reports,
   labelKey: 'nav.reports',
   icon: ChartColumn,
};
