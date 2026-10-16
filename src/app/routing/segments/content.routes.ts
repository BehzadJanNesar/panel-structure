import { Files } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const contentRoute: PanelRoute = {
   id: RouteId.content,
   path: PATH.content,
   labelKey: 'nav.content',
   icon: Files,
};
