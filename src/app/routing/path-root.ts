/**
 * URL segments for the panel. Relative to the shell (`/`), so a moved screen
 * changes the path here instead of inside every route file.
 */
export const PATH = {
   dashboard: 'dashboard',
   orders: 'orders',
   products: 'products',
   productList: 'list',
   productBulkImport: 'bulk-import',
   productCategories: 'categories',
   productBrands: 'brands',
   productReviews: 'reviews',
   customers: 'customers',
   sales: 'sales',
   content: 'content',
   finance: 'finance',
   reports: 'reports',
   guide: 'guide',
   support: 'support',
   instagram: 'instagram',
   settings: 'settings',
   activity: 'activity',
   sms: 'sms',
} as const;
