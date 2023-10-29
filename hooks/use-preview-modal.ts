import { create } from 'zustand';

import { Product, ProductResponse } from '@/types';

interface PreviewModalStore {
  isOpen: boolean;
  data?: ProductResponse;
  onOpen: (data: ProductResponse) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductResponse) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
