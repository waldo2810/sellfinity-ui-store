"use client";

import { Billboard } from "@/types";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import NextImage from "next/image";
import BillboardLabel from "./billboard-label";

const GalleryTab = ({ billboard }: { billboard: Billboard }) => {
  return (
    <Tab className="relative w-full md:w-36 h-10 md:h-full rounded-lg">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full inset-0 overflow-hidden rounded-md">
            <NextImage
              fill
              src={billboard.imageUrl}
              alt={billboard.label}
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-1 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

const BillboardGallery = ({ billboards }: { billboards: Billboard[] }) => {
  return (
    <Tab.Group as="div" className="flex md:flex-row flex-col-reverse gap-2">
      <div>
        <Tab.List className="h-10 md:h-full flex md:flex-col-reverse items-center justify-center md:justify-start gap-2">
          {billboards.map((billboard) => (
            <GalleryTab key={billboard.id} billboard={billboard} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="w-full">
        {billboards.map((billboard) => (
          <Tab.Panel key={billboard.id}>
            <div
              style={{ backgroundImage: `url(${billboard.imageUrl})` }}
              className="rounded-xl relative h-40 md:h-60 overflow-hidden bg-cover"
            >
              <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                <BillboardLabel text={billboard.label} />
              </div>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default BillboardGallery;
