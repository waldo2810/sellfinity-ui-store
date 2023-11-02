"use client";

import { ShoppingBag } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "./ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
	const params = useParams();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const router = useRouter();
	const cart = useCart();

	if (!isMounted) {
		return null;
	}

	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button
				onClick={() => router.push(`${params.storeId}/cart`)}
				className="flex items-center px-4 py-2 bg-black text-white border-transparent border-2 hover:border-black hover:border-2 hover:bg-transparent hover:bg-opacity-100 hover:text-black"
			>
				<ShoppingBag size={20} />
				<span className="ml-2 text-sm font-medium">
					{cart.items.length}
				</span>
			</Button>
		</div>
	);
};

export default NavbarActions;
