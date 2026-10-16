import { Settings } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const settingsRoute: PanelRoute = {
   id: RouteId.settings,
   path: PATH.settings,
   labelKey: 'nav.settings',
   icon: Settings,
};
