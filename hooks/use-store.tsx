import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Store } from "@/types";

interface StoreStore {
  store: Store | undefined;
  setStore: (store: Store) => void;
}

const useStore = create(
  persist<StoreStore>(
    (set, get) => ({
      store: undefined,
      setStore: (store: Store) => {
        set({ store: store });
      },
    }),
    {
      name: "store-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useStore;
