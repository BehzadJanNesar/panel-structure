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
import { cn } from '@/shared/lib/cn';

const { Header, Sider, Content } = Layout;

const labelKeyOf = (handle: unknown) => (handle as PanelRouteHandle | undefined)?.labelKey;

const menuClassName = (collapsed: boolean) =>
   cn(
      'border-e-0! bg-transparent!',
      '[&_.ant-menu-item]:transition-[background-color,color] [&_.ant-menu-item]:duration-150',
      '[&_.ant-menu-submenu-title]:transition-[background-color,color] [&_.ant-menu-submenu-title]:duration-150',
      'motion-reduce:[&_.ant-menu-item]:transition-none motion-reduce:[&_.ant-menu-submenu-title]:transition-none',
      '[&_.ant-menu-item-selected]:font-medium [&_.ant-menu-submenu-selected>.ant-menu-submenu-title]:font-medium',
      '[&_.ant-menu-item-selected]:after:absolute [&_.ant-menu-item-selected]:after:start-0 [&_.ant-menu-item-selected]:after:inset-y-2.5 [&_.ant-menu-item-selected]:after:block! [&_.ant-menu-item-selected]:after:w-[3px] [&_.ant-menu-item-selected]:after:rounded-full [&_.ant-menu-item-selected]:after:border-0! [&_.ant-menu-item-selected]:after:bg-[linear-gradient(180deg,var(--color-gold-soft),var(--color-gold))] [&_.ant-menu-item-selected]:after:opacity-100! [&_.ant-menu-item-selected]:after:transform-none! [&_.ant-menu-item-selected]:after:content-[""]',
      '[&_.ant-menu-sub.ant-menu-inline]:bg-transparent! [&_.ant-menu-sub_.ant-menu-item]:text-[13px]',
      collapsed && [
         'w-full!',
         '[&.ant-menu-inline-collapsed>.ant-menu-item]:mx-auto! [&.ant-menu-inline-collapsed>.ant-menu-item]:my-0.5! [&.ant-menu-inline-collapsed>.ant-menu-item]:flex! [&.ant-menu-inline-collapsed>.ant-menu-item]:h-10! [&.ant-menu-inline-collapsed>.ant-menu-item]:w-10! [&.ant-menu-inline-collapsed>.ant-menu-item]:items-center [&.ant-menu-inline-collapsed>.ant-menu-item]:justify-center [&.ant-menu-inline-collapsed>.ant-menu-item]:p-0! [&.ant-menu-inline-collapsed>.ant-menu-item]:leading-none!',
         '[&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:mx-auto! [&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:my-0.5! [&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:flex! [&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:h-10! [&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:w-10! [&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:items-center [&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:justify-center [&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:p-0! [&.ant-menu-inline-collapsed>.ant-menu-submenu>.ant-menu-submenu-title]:leading-none!',
         '[&_.ant-menu-item-icon]:m-0! [&_.ant-menu-item-icon]:leading-none! [&_.ant-menu-submenu-title_.ant-menu-item-icon]:m-0! [&_.ant-menu-submenu-title_.ant-menu-item-icon]:leading-none! [&_.ant-menu-item-icon_svg]:block',
         '[&_.ant-menu-title-content]:hidden! [&_.ant-menu-submenu-arrow]:hidden! [&_.ant-menu-item-selected]:after:hidden!',
      ],
   );

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
      <Layout className="h-full! min-h-0! flex-1! overflow-hidden!">
         <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            width={280}
            collapsedWidth={76}
            theme="dark"
            className="h-full! overflow-hidden! border-e border-e-[color-mix(in_srgb,var(--color-gold)_28%,transparent)] [&_.ant-layout-sider-children]:flex! [&_.ant-layout-sider-children]:h-full! [&_.ant-layout-sider-children]:overflow-hidden! [&_.ant-layout-sider-children]:bg-[radial-gradient(90%_36%_at_80%_0%,rgb(158_61_92/34%),transparent_58%),linear-gradient(180deg,rgb(255_255_255/4%),transparent_22%)] [&_.ant-layout-sider-trigger]:border-t [&_.ant-layout-sider-trigger]:border-white/6 [&_.ant-layout-sider-trigger]:text-(--color-gold)! [&_.ant-layout-sider-trigger]:transition-colors [&_.ant-layout-sider-trigger]:duration-150 hover:[&_.ant-layout-sider-trigger]:text-(--color-gold-soft) motion-reduce:[&_.ant-layout-sider-trigger]:transition-none"
         >
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden pb-12">
               <Link
                  to={`/${PATH.dashboard}`}
                  className={cn(
                     'mt-2.5 mb-1 flex shrink-0 items-center gap-2.5 rounded-xl p-1 no-underline transition-colors duration-150 hover:bg-white/4 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-(--color-gold) motion-reduce:transition-none',
                     collapsed ? 'mx-auto size-10 justify-center p-0' : 'mx-2.5',
                  )}
               >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[linear-gradient(160deg,var(--color-primary),var(--color-primary-deep))] text-[15px] font-medium text-white shadow-[0_10px_24px_rgb(158_61_92/38%),inset_0_1px_0_rgb(255_255_255/28%)]">
                     {mark}
                  </span>
                  {collapsed ? null : (
                     <span className="min-w-0">
                        <span className="block truncate text-[15px] font-medium text-(--color-sider-text)">
                           {t('shell.brand')}
                        </span>
                        <span className="mt-0.5 block truncate text-xs text-(--color-sider-muted)">{t('appName')}</span>
                     </span>
                  )}
               </Link>
               <div className="min-h-0 flex-1 [scrollbar-width:thin] [scrollbar-color:color-mix(in_srgb,var(--color-gold)_55%,transparent)_transparent] overflow-x-hidden overflow-y-auto py-1">
                  <Menu
                     theme="dark"
                     mode="inline"
                     className={menuClassName(collapsed)}
                     selectedKeys={[location.pathname]}
                     {...(collapsed ? {} : { openKeys, onOpenChange: setOpenKeys })}
                     onClick={({ key }) => navigate(key)}
                     items={toMenuItems(mainLayoutChildRoutes, t)}
                  />
               </div>
               <div
                  className={cn(
                     'mx-2.5 mt-1.5 mb-2 flex shrink-0 items-center gap-2.5 rounded-[14px] border border-white/8 bg-white/4 p-2',
                     collapsed && 'mx-auto w-9 justify-center border-0 bg-transparent p-0',
                  )}
                  title={collapsed ? t('shell.operator') : undefined}
               >
                  <span
                     className={cn(
                        'grid size-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(160deg,var(--color-primary),var(--color-primary-deep))] text-[13px] font-medium text-white shadow-[0_0_0_2px_color-mix(in_srgb,var(--color-gold)_70%,transparent)]',
                        collapsed && 'size-8',
                     )}
                  >
                     {t('shell.operator').charAt(0)}
                  </span>
                  {collapsed ? null : (
                     <span className="min-w-0">
                        <span className="block truncate text-[13px] text-(--color-sider-text)">
                           {t('shell.operator')}
                        </span>
                        <span className="mt-0.5 block text-[11px] text-(--color-gold-soft)">{t('shell.role')}</span>
                     </span>
                  )}
               </div>
            </div>
         </Sider>
         <Layout className="flex! min-h-0! min-w-0 flex-1! flex-col! overflow-hidden! bg-[radial-gradient(70%_42%_at_0%_0%,rgb(198_162_122/22%),transparent_52%),radial-gradient(50%_36%_at_100%_100%,rgb(158_61_92/10%),transparent_48%),var(--color-surface)]!">
            <Header className="z-20 flex! h-12! shrink-0 items-center justify-between gap-3 border-b border-b-[color-mix(in_srgb,var(--color-line)_80%,white)] bg-[color-mix(in_srgb,var(--color-canvas)_92%,transparent)]! px-3.5! leading-none!">
               <Breadcrumb
                  className="min-w-0 overflow-hidden text-[13px] leading-tight [&_ol]:flex-nowrap"
                  items={crumbs.map((crumb, index) => ({
                     title:
                        index === crumbs.length - 1 ? (
                           t(crumb.labelKey)
                        ) : (
                           <Link to={crumb.pathname}>{t(crumb.labelKey)}</Link>
                        ),
                  }))}
               />
               <div className="flex h-8 shrink-0 items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--color-primary)_16%,var(--color-line))] bg-(--color-canvas) px-2.5">
                  <span
                     className="size-1.5 shrink-0 rounded-full bg-(--color-primary) shadow-[0_0_0_3px_rgb(158_61_92/14%)]"
                     aria-hidden="true"
                  />
                  <span className="text-xs text-(--color-ink-muted)">{t('shell.timezone')}</span>
                  <TehranClock />
               </div>
            </Header>
            <Content className="flex! min-h-0! flex-1! overflow-hidden! p-2.5">
               <section
                  key={location.pathname}
                  className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/70 bg-[linear-gradient(180deg,rgb(255_252_251/96%),rgb(255_252_251/88%)),var(--color-canvas)] shadow-[inset_0_1px_0_rgb(255_255_255/80%),0_12px_28px_rgb(26_18_22/5%)] transition-[opacity,transform] duration-300 ease-out before:absolute before:inset-x-4 before:top-0 before:h-0.5 before:rounded-full before:bg-[linear-gradient(90deg,transparent,var(--color-gold),var(--color-primary),transparent)] before:content-[''] motion-reduce:transition-none starting:translate-y-2 starting:opacity-0"
               >
                  <span
                     className="pointer-events-none absolute -end-2 -bottom-9 z-0 text-[220px] leading-none font-bold text-transparent select-none [-webkit-text-stroke:1px_rgb(158_61_92/0.12)]"
                     aria-hidden="true"
                  >
                     {mark}
                  </span>
                  <header className="relative z-[1] shrink-0 px-3.5 pt-2.5">
                     <h1 className="m-0 text-base leading-snug font-medium text-(--color-ink)">{title}</h1>
                  </header>
                  <div className="relative z-[1] min-h-0 flex-1 [scrollbar-width:thin] [scrollbar-color:color-mix(in_srgb,var(--color-gold)_55%,transparent)_transparent] overflow-auto px-3.5 pt-2.5 pb-3.5">
                     <Outlet />
                  </div>
               </section>
            </Content>
         </Layout>
      </Layout>
   );
};
