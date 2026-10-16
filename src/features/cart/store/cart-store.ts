import { create } from 'zustand';

import type { ProductId } from '@/features/catalog';
import { createId } from '@/shared/lib/id';

import type { CartLine } from '../types';

type CartState = {
   lines: CartLine[];
   addLine: (productId: ProductId, quantity?: number) => void;
   removeLine: (id: string) => void;
   clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
   lines: [],
   addLine: (productId, quantity = 1) =>
      set((state) => {
         const existing = state.lines.find((line) => line.productId === productId);

         if (!existing) {
            return {
               lines: [...state.lines, { id: createId(), productId, quantity }],
            };
         }

         return {
            lines: state.lines.map((line) =>
               line.productId === productId ? { ...line, quantity: line.quantity + quantity } : line,
            ),
         };
      }),
   removeLine: (id) =>
      set((state) => ({
         lines: state.lines.filter((line) => line.id !== id),
      })),
   clear: () => set({ lines: [] }),
}));
