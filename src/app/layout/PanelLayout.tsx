import { Breadcrumb, Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom';

import { TehranClock } from '@/app/layout/TehranClock';
import { useSidebarStore } from '@/app/layout/sidebar-store';
import { mainLayoutChildRoutes, menuGroupKeys } from '@/app/routing/app-authenticated.shell';
import { PATH } from '@/app/routing/path-root';
import { toMenuItems } from '@/app/routing/to-menu-items';
import type { PanelRouteHandle } from '@/app/routing/types';

const { Header, Sider, Content } = Layout;

const labelKeyOf = (handle: unknown) => (handle as PanelRouteHandle | undefined)?.labelKey;

export const PanelLayout = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();
   const location = useLocation();
   const matches = useMatches();
   const collapsed = useSidebarStore((state) => state.collapsed);
   const setCollapsed = useSidebarStore((state) => state.setCollapsed);
   const [openKeys, setOpenKeys] = useState(() =>
      menuGroupKeys.filter((key) => location.pathname === key || location.pathname.startsWith(`${key}/`)),
   );

   const crumbs = matches.flatMap((match) => {
      const labelKey = labelKeyOf(match.handle);
      if (!labelKey) return [];
      return [{ labelKey, pathname: match.pathname }];
   });
   const title = t(crumbs.at(-1)?.labelKey ?? 'shell.brand');
   const mark = t('shell.brand').charAt(0);

   useEffect(() => {
      document.title = `${title} · ${t('shell.brand')}`;
   }, [title, t]);

   useEffect(() => {
      const next = menuGroupKeys.filter((key) => location.pathname.startsWith(`${key}/`));
      if (next.length === 0) return;

      setOpenKeys((current) => {
         const merged = new Set([...current, ...next]);
         if (merged.size === current.length) return current;
         return [...merged];
      });
   }, [location.pathname]);

   return (
      <Layout className="panel-shell">
         <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            width={280}
            collapsedWidth={76}
            theme="dark"
            className="panel-sider"
         >
            <div className="panel-sider-inner">
               <Link to={`/${PATH.dashboard}`} className="panel-brand">
                  <span className="panel-brand-mark">{mark}</span>
                  {collapsed ? null : (
                     <span className="min-w-0">
                        <span className="panel-brand-name">{t('shell.brand')}</span>
                        <span className="panel-brand-meta">{t('appName')}</span>
                     </span>
                  )}
               </Link>
               <div className="panel-nav">
                  <Menu
                     theme="dark"
                     mode="inline"
                     className="panel-menu"
                     selectedKeys={[location.pathname]}
                     {...(collapsed ? {} : { openKeys, onOpenChange: setOpenKeys })}
                     onClick={({ key }) => navigate(key)}
                     items={toMenuItems(mainLayoutChildRoutes, t)}
                  />
               </div>
               <div className="panel-operator" title={collapsed ? t('shell.operator') : undefined}>
                  <span className="panel-operator-mark">{t('shell.operator').charAt(0)}</span>
                  {collapsed ? null : (
                     <span className="min-w-0">
                        <span className="panel-operator-name">{t('shell.operator')}</span>
                        <span className="panel-operator-role">{t('shell.role')}</span>
                     </span>
                  )}
               </div>
            </div>
         </Sider>
         <Layout className="panel-main">
            <Header className="panel-header">
               <Breadcrumb
                  className="panel-crumbs"
                  items={crumbs.map((crumb, index) => ({
                     title:
                        index === crumbs.length - 1 ? (
                           t(crumb.labelKey)
                        ) : (
                           <Link to={crumb.pathname}>{t(crumb.labelKey)}</Link>
                        ),
                  }))}
               />
               <div className="panel-clock">
                  <span className="panel-clock-live" aria-hidden="true" />
                  <span className="panel-clock-kicker">{t('shell.timezone')}</span>
                  <TehranClock />
               </div>
            </Header>
            <Content className="panel-content">
               <section key={location.pathname} className="panel-canvas">
                  <span className="panel-watermark" aria-hidden="true">
                     {mark}
                  </span>
                  <header className="panel-masthead">
                     <h1 className="panel-title">{title}</h1>
                  </header>
                  <div className="panel-outlet">
                     <Outlet />
                  </div>
               </section>
            </Content>
         </Layout>
      </Layout>
   );
};
