"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "./gallery";
import Info from "./info";
import Modal from "./ui/modal";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const data = usePreviewModal((state) => state.data);

  if (!data) {
    return null;
  }

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={data.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={data} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
