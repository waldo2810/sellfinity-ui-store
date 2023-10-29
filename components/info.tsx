"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { CartItem, Color, ProductResponse, Size } from "@/types";
import useCart from "@/hooks/use-cart";
import { Badge } from "./ui/badge";
import ColorBall from "./ui/colorball";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";

interface InfoProps {
  data: ProductResponse;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<number[]>([]);

  const handleSelectedSizes = (id: number) => {
    if (selectedSizes.includes(id)) {
      const updatedSizes = selectedSizes.filter((size) => size !== id);
      setSelectedSizes(updatedSizes);
    } else {
      setSelectedSizes([...selectedSizes, id]);
    }
  };
  const handleSelectedColors = (id: number) => {
    if (selectedColors.includes(id)) {
      const updatedColors = selectedColors.filter((size) => size !== id);
      setSelectedColors(updatedColors);
    } else {
      setSelectedColors([...selectedColors, id]);
    }
  };

  const onAddToCart = () => {
    if (selectedSizes.length && selectedColors.length) {
      const cartItem: CartItem = {
        product: data.product,
        sizeIds: selectedSizes,
        colorIds: selectedColors,
        images: data.images
      };
      cart.addItem(cartItem);
    } else {
      toast.error("No se ha seleccionado talla y/o color")
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.product.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Elige tus tallas:</h3>
          {data?.sizes?.map((size: Size) => (
            <Badge
              className={cn(
                "cursor-pointer hover:border-slate-900 text-sm",
                selectedSizes.includes(size.id)
                  ? "border-slate-900 font-black"
                  : ""
              )}
              variant="outline"
              onClick={() => handleSelectedSizes(size.id)}
            >
              {size.value}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Colors:</h3>
          {data?.colors?.map((color: Color) => (
            <Badge
              className={cn(
                "cursor-pointer hover:border-slate-900 text-sm flex gap-3",
                selectedColors.includes(color.id)
                  ? "border-slate-900 font-black"
                  : ""
              )}
              variant="outline"
              onClick={() => handleSelectedColors(color.id)}
            >
              {color.name}
              <ColorBall colorValue={color.value} />
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
