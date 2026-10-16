import { Users } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const customersRoute: PanelRoute = {
   id: RouteId.customers,
   path: PATH.customers,
   labelKey: 'nav.customers',
   icon: Users,
};
