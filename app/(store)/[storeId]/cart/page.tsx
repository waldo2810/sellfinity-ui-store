import { Metadata } from "next";
import CartClient from "./components/cart-client";

export const metadata: Metadata = {
	title: 'Carrito',
	description: 'Carrito de compras',
}

const CartPage = () => {

	return (
		<CartClient />
	);
};

export default CartPage;
