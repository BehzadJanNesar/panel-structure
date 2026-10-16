import type { ComponentType } from 'react';
import type { LucideIcon } from 'lucide-react';

/**
 * One sidebar entry and the route it owns.
 * A non-empty `children` list turns the entry into a submenu; an empty list stays a single link.
 * `load` is the page chunk. Leave it unset until that screen exists.
 */
export type PanelRoute = {
   id: string;
   path: string;
   labelKey: string;
   icon: LucideIcon;
   children?: PanelRoute[];
   load?: () => Promise<{ default: ComponentType }>;
};

export type PanelRouteHandle = {
   labelKey: string;
};
