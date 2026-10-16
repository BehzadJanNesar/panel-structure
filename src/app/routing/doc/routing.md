# Panel routing

This folder is the route tree for the admin panel. It follows the same split as `example/routing` (public routes, authenticated shell, path constants, stable ids, one file per menu group) and adapts it to `react-router-dom`'s data router.

The example targets React Router framework mode (`@react-router/dev`), where each route points at a module file path. This app is a Vite SPA, so the tree is a `RouteObject[]` passed to `createBrowserRouter`. That API already supports `loader`, `action`, `errorElement`, and `lazy` without a framework compiler. Page files are not registered yet: leaf routes match and render nothing, so `PanelLayout`'s `<Outlet />` stays empty.

## File map

```
src/app/routing/
  doc/routing.md                 this guide
  index.ts                       assembles public routes + the shell
  path-root.ts                   URL segments
  route-ids.ts                   stable route ids
  types.ts                       PanelRoute, the shared menu and route shape
  to-route-objects.ts            PanelRoute[] -> RouteObject[]
  to-menu-items.ts               PanelRoute[] -> Ant Design menu items
  app-public.routes.ts           routes outside the shell (empty until login)
  app-authenticated.shell.ts     sidebar order
  segments/*.routes.ts           one menu group per file
```

`src/app/router.tsx` only calls `createBrowserRouter(appRouteConfiguration)`.

## Why one definition feeds both the menu and the router

`PanelRoute` carries `id`, `path`, `labelKey`, `icon`, and optional `children`. `toRouteObjects` and `toMenuItems` read that list, so a new screen cannot show up in the sidebar without a matching URL, or the other way around.

Menu item keys are absolute paths (`/products/list`). The layout sets `selectedKeys` from `location.pathname`.

A route with no children is a single menu link and a route with no `element`. A route with children becomes an Ant Design submenu and a parent route whose `element` is `<Outlet />`, so the child still renders in the shell outlet. Groups that do not have a submenu yet (customers, sales, content, finance, reports, guide, settings) are single links. Adding a child to that same object turns them into a submenu. No second registration step.

## Assembly order

1. `publicRoutes` — outside `PanelLayout`.
2. `authenticatedAppShell` — `path: '/'`, element `PanelLayout`.
3. An index child redirects `/` to `/dashboard`. It is not a sidebar row.
4. `mainLayoutChildRoutes`, in sidebar order.

Match order is that array order. These paths are static. If you later add a dynamic segment such as `:id`, put it after every concrete path it could swallow.

`handle.labelKey` is an i18n key. The header title reads the deepest match via `useMatches()`.

## How to add a route

1. Add the URL segment in `path-root.ts`.
2. Add a stable id in `route-ids.ts` (`domain:feature`).
3. Add the label to both `src/shared/i18n/locales/fa.ts` and `en.ts`. Do not put the Persian or English string in JSX.
4. Create or edit a file in `segments/`. Export a `PanelRoute` with `id`, `path`, `labelKey`, and a `lucide-react` icon.
5. If the screen belongs under an existing group, push it onto that group's `children` instead of the shell list. Children use a path relative to the parent (`list` under `products` becomes `/products/list`).
6. If it is a new top-level row, import it in `app-authenticated.shell.ts` and insert it in `mainLayoutChildRoutes` where the sidebar should show it.
7. Leave `element` unset until the screen exists. When it does, set `element` or `lazy` on that route inside `toRouteObjects` (or on the `PanelRoute` if you extend the mapper). Do not add a placeholder page component.
8. A screen that must render without the sidebar (login, for example) goes in `app-public.routes.ts`, not in the shell children.

`RouteId` values are optional for matching, and they stay stable for a future `loader` or test. The id is copied onto the `RouteObject`.

## What is intentionally absent

There is no auth gate and no route-module prefetch. Those belong to the framework-mode example and need a login screen and page modules this shell does not have yet. Add them beside `app-public.routes.ts` when that work starts.
