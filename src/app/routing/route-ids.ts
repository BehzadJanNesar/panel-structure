/**
 * Stable route ids for loaders, tests, and error reports.
 * Convention: `domain:feature`.
 */
export const RouteId = {
   appShell: 'app-shell',
   dashboard: 'dashboard:index',
   orders: 'orders:list',
   products: 'products',
   productList: 'products:list',
   productBulkImport: 'products:bulk-import',
   productCategories: 'products:categories',
   productBrands: 'products:brands',
   productReviews: 'products:reviews',
   customers: 'customers:index',
   sales: 'sales:index',
   content: 'content:index',
   finance: 'finance:index',
   reports: 'reports:index',
   guide: 'guide:index',
   support: 'support:list',
   instagram: 'instagram:index',
   settings: 'settings:index',
   activity: 'activity:list',
   sms: 'sms:list',
   uiKit: 'ui-kit:index',
} as const;
