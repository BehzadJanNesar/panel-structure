import type { ThemeConfig } from 'antd';

import { palette } from '@/shared/config/palette';

/** Antd inherits the Rose Atelier palette. Shell chrome that antd does not paint uses the same values as CSS variables. */
export const antdTheme: ThemeConfig = {
   token: {
      colorPrimary: palette.primary,
      colorInfo: palette.primary,
      colorLink: palette.primary,
      colorBgLayout: palette.surface,
      colorBgContainer: palette.canvas,
      colorText: palette.ink,
      colorTextSecondary: palette.inkMuted,
      colorBorder: palette.line,
      colorBorderSecondary: palette.line,
      borderRadius: 12,
      fontFamily: 'IRANSans, system-ui, sans-serif',
      controlHeight: 40,
   },
   components: {
      Layout: {
         siderBg: palette.sider,
         headerBg: 'transparent',
         bodyBg: palette.surface,
         triggerBg: palette.sider,
         triggerColor: palette.gold,
         headerHeight: 48,
      },
      Menu: {
         itemHeight: 40,
         itemBorderRadius: 10,
         itemMarginInline: 8,
         itemMarginBlock: 2,
         iconSize: 18,
         darkItemBg: 'transparent',
         darkSubMenuItemBg: 'transparent',
         darkItemSelectedBg: 'rgba(158, 61, 92, 0.28)',
         darkItemHoverBg: 'rgba(255, 255, 255, 0.05)',
         darkItemColor: palette.siderMuted,
         darkItemSelectedColor: palette.siderText,
         darkPopupBg: palette.siderRaised,
      },
      Breadcrumb: {
         itemColor: palette.inkMuted,
         lastItemColor: palette.ink,
         linkColor: palette.inkMuted,
         linkHoverColor: palette.primary,
         separatorColor: palette.gold,
      },
   },
};
