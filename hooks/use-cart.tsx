import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { CartItem } from "@/types";

interface CartStore {
  items: CartItem[];
  addItem: (cartItem: CartItem) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (cartItem: CartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.product.id === cartItem.product.id,
        );

        if (existingItem) {
          return toast("Este articulo ya se encuentra en el carrito");
        }

        set({ items: [...get().items, cartItem] });
        toast.success("Articulo agregado a tu carrito");
      },
      removeItem: (id: number) => {
        set({
          items: [...get().items.filter((item) => item.product.id !== id)],
        });
        toast.success("Articulo removido del carrito");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
