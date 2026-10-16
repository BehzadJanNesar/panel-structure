import { Headset } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const supportRoute: PanelRoute = {
   id: RouteId.support,
   path: PATH.support,
   labelKey: 'nav.support',
   icon: Headset,
};
