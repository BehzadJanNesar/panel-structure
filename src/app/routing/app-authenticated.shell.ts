import { activityRoute } from './segments/activity.routes';
import { contentRoute } from './segments/content.routes';
import { customersRoute } from './segments/customers.routes';
import { dashboardRoute } from './segments/dashboard.routes';
import { financeRoute } from './segments/finance.routes';
import { guideRoute } from './segments/guide.routes';
import { instagramRoute } from './segments/instagram.routes';
import { ordersRoute } from './segments/orders.routes';
import { productsRoute } from './segments/products.routes';
import { reportsRoute } from './segments/reports.routes';
import { salesRoute } from './segments/sales.routes';
import { settingsRoute } from './segments/settings.routes';
import { smsRoute } from './segments/sms.routes';
import { supportRoute } from './segments/support.routes';

/**
 * Sidebar order is the match order under the shell.
 * Paths are static today; a future dynamic segment must sit after every concrete path it could shadow.
 */
export const mainLayoutChildRoutes = [
   dashboardRoute,
   ordersRoute,
   productsRoute,
   customersRoute,
   salesRoute,
   contentRoute,
   financeRoute,
   reportsRoute,
   guideRoute,
   supportRoute,
   instagramRoute,
   settingsRoute,
   activityRoute,
   smsRoute,
];

/** Keys of groups that already have children, so the menu can reopen them after navigation. */
export const menuGroupKeys = mainLayoutChildRoutes
   .filter((route) => (route.children?.length ?? 0) > 0)
   .map((route) => `/${route.path}`);
