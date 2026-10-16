import type { ProductId } from '@/features/catalog';

export type CartLine = {
   id: string;
   productId: ProductId;
   quantity: number;
};
