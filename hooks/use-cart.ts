import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

export interface CartItem extends Product {
  cartQuantity: number; // Quantity of the product in the cart
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  decrementItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      // Add Item Logic
      addItem: (data: Product) => {
        const currentItems = get().items;

        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          // If the item already exists, increment the cartQuantity
          set({
            items: currentItems.map((item) =>
              item.id === data.id
                ? { ...item, cartQuantity: item.cartQuantity + 1 }
                : item
            ),
          });
          toast.success("Item quantity updated in cart.");
        } else {
          // If the item does not exist, add it to the cart with cartQuantity = 1
          set({
            items: [...currentItems, { ...data, cartQuantity: 1 }],
          });
          toast.success("Item added to cart.");
        }
      },

      // Remove Item Logic
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Item removed from cart.");
      },

      // Decrement Item Logic
      decrementItem: (id: string) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);

        if (existingItem && existingItem.cartQuantity > 1) {
          set({
            items: currentItems.map((item) =>
              item.id === id
                ? { ...item, cartQuantity: item.cartQuantity - 1 }
                : item
            ),
          });
          toast.success("Item quantity decreased in cart.");
        } else {
          set({ items: currentItems.filter((item) => item.id !== id) });
          toast.success("Item removed from cart.");
        }
      },

      // Clear All Items Logic
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
