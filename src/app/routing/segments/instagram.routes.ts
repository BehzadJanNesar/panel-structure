import { Camera } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const instagramRoute: PanelRoute = {
   id: RouteId.instagram,
   path: PATH.instagram,
   labelKey: 'nav.instagram',
   icon: Camera,
};
