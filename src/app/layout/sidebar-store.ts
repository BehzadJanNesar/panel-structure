import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SidebarState = {
   collapsed: boolean;
   setCollapsed: (collapsed: boolean) => void;
};

/** Collapse preference survives refresh; the sider still uses antd's own `collapsible`. */
export const useSidebarStore = create<SidebarState>()(
   persist(
      (set) => ({
         collapsed: false,
         setCollapsed: (collapsed) => set({ collapsed }),
      }),
      { name: 'panel-sider-collapsed' },
   ),
);
