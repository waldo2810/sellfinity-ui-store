import Navbar from "@/components/navbar";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getStore from "@/actions/get-store";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage({
	params,
}: {
	params: { storeId: number };
}) {
	const products = await getProducts({ isFeatured: true });
	const billboard = await getBillboard(params.storeId);
	const store = await getStore(params.storeId);

	return (
		<>
			<Container>
				<div className="space-y-10 pb-10">
					<Billboard data={billboard} />
					<div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
						<ProductList title="Productos destacados" items={products} />
					</div>
				</div>
			</Container>
		</>
	);
}
