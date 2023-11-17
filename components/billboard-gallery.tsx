"use client";

import { Billboard } from "@/types";

interface GalleryProps {
  billboards: Billboard[];
}

const BillboardGallery: React.FC<GalleryProps> = ({ billboards }) => {
  return billboards.map((billboard) => (
    <div
      key={billboard.id}
      style={{ backgroundImage: `url(${billboard.imageUrl})` }}
      className="rounded-xl relative aspect-square md:aspect-[4/1] overflow-hidden bg-cover"
    >
      <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold uppercase text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs billboard-text">
          {billboard ? billboard.label : ""}
        </div>
      </div>
    </div>
  ));
};

export default BillboardGallery;
