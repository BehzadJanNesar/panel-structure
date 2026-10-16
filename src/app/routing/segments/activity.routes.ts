import { History } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const activityRoute: PanelRoute = {
   id: RouteId.activity,
   path: PATH.activity,
   labelKey: 'nav.activity',
   icon: History,
};
