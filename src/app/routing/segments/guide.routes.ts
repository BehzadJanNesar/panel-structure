import { CircleHelp } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const guideRoute: PanelRoute = {
   id: RouteId.guide,
   path: PATH.guide,
   labelKey: 'nav.guide',
   icon: CircleHelp,
};
