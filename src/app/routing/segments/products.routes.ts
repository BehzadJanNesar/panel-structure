import { FolderTree, List, MessageSquareText, Package, Tags, Upload } from 'lucide-react';

import { PATH } from '../path-root';
import { RouteId } from '../route-ids';
import type { PanelRoute } from '../types';

export const productsRoute: PanelRoute = {
   id: RouteId.products,
   path: PATH.products,
   labelKey: 'nav.products',
   icon: Package,
   children: [
      {
         id: RouteId.productList,
         path: PATH.productList,
         labelKey: 'nav.productList',
         icon: List,
      },
      {
         id: RouteId.productBulkImport,
         path: PATH.productBulkImport,
         labelKey: 'nav.productBulkImport',
         icon: Upload,
      },
      {
         id: RouteId.productCategories,
         path: PATH.productCategories,
         labelKey: 'nav.productCategories',
         icon: FolderTree,
      },
      {
         id: RouteId.productBrands,
         path: PATH.productBrands,
         labelKey: 'nav.productBrands',
         icon: Tags,
      },
      {
         id: RouteId.productReviews,
         path: PATH.productReviews,
         labelKey: 'nav.productReviews',
         icon: MessageSquareText,
      },
   ],
};
