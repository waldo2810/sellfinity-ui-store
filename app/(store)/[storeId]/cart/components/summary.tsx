"use client";

import axios from "axios";
import { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Button from "../../../../../components/ui/button";
import Currency from "../../../../../components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pago completado.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Ha ocurrido un error.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.product.price);
  }, 0);

  const onCheckout = async () => {
    console.log(items)
    try {
      const response = await axios.post(
        // `${process.env.NEXT_PUBLIC_PAYMENTS_API_URL}/checkout/create/mercadopago`,
        `${process.env.NEXT_PUBLIC_PAYMENTS_API_URL}/checkout/create/stripe`,
        {
          storeId: params.storeId,
          items,
        }
      );
      window.location = response.data.url;
    } catch (error) {
      toast.error("Ha ocurrido un error de nuestro lado");
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">
        Resumen de tu compra
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Total de la orden
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6 bg-black text-white border-transparent border-2 hover:border-black hover:border-2 hover:bg-transparent hover:bg-opacity-100 hover:text-black"
      >
        Pagar
      </Button>
    </div>
  );
};

export default Summary;
