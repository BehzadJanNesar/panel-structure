import { ShoppingCart } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const ordersRoute: PanelRoute = {
   id: RouteId.orders,
   path: PATH.orders,
   labelKey: 'nav.orders',
   icon: ShoppingCart,
};
