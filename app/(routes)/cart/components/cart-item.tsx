import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { CartItem } from "@/types";
import getSize from "@/actions/get-size";

interface CartItemProps {
	data: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
	const cart = useCart();

	const retrieveSize = async (id: number) => await getSize(id);

	const onRemove = () => {
		cart.removeItem(data.product.id);
	};

	return (
		<li className="flex py-6 border-b">
			<div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
				<Image
					fill
					src={data.images[0].url}
					alt=""
					className="object-cover object-center"
				/>
			</div>
			<div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
				<div className="absolute z-10 right-0 top-0">
					<IconButton onClick={onRemove} icon={<X size={15} />} />
				</div>
				<div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
					<div className="flex justify-between">
						<p className=" text-lg font-semibold text-black">
							{data.product.name}
						</p>
					</div>

					<div className="mt-1 flex flex-col text-sm">
						<p className="border-l border-gray-200 pl-4 text-gray-500">
							{data.product.name}
						</p>
						<p className="border-l border-gray-200 pl-4 text-gray-500">
							{data.sizeIds.map((sizeId) => (
								<p key={sizeId}>{retrieveSize(sizeId).then((size) => <span>{size.name} ({size.value})</span>)}</p>
							))}
						</p>
					</div>
					<Currency value={data.product.price} />
				</div>
			</div>
		</li>
	);
};

export default CartItem;
