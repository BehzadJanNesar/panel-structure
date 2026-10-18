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
         darkPopupBg: palette.siderRaised,
         darkItemColor: palette.siderMuted,
         darkItemHoverBg: palette.menuHoverBg,
         darkItemSelectedColor: palette.siderText,
         darkItemSelectedBg: palette.menuSelectedBg,
      },
      Breadcrumb: {
         itemColor: palette.inkMuted,
         lastItemColor: palette.ink,
         linkColor: palette.inkMuted,
         linkHoverColor: palette.primary,
         separatorColor: palette.gold,
      },
      Modal: {
         headerBg: palette.canvas,
         footerBg: palette.canvas,
         contentBg: palette.canvas,
      },
      Progress: {
         remainingColor: palette.line,
      },
      Card: {
         colorBorderSecondary: palette.line,
      },
      Table: {
         headerBg: palette.surface,
         rowHoverBg: palette.tableRowHoverBg,
      },
      Button: {
         defaultBorderColor: palette.line,
         defaultHoverColor: palette.primary,
         defaultHoverBorderColor: palette.primary,
         primaryShadow: palette.buttonPrimaryShadow,
      },
      DatePicker: {
         cellHoverBg: palette.dateCellHoverBg,
         cellActiveWithRangeBg: palette.dateCellRangeBg,
      },
      Select: {
         optionActiveBg: palette.selectOptionActiveBg,
         optionSelectedBg: palette.selectOptionSelectedBg,
      },
   },
};
