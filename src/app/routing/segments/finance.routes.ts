import { Wallet } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const financeRoute: PanelRoute = {
   id: RouteId.finance,
   path: PATH.finance,
   labelKey: 'nav.finance',
   icon: Wallet,
};
