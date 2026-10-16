import { MessageSquare } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const smsRoute: PanelRoute = {
   id: RouteId.sms,
   path: PATH.sms,
   labelKey: 'nav.sms',
   icon: MessageSquare,
};
