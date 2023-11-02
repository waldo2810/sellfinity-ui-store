import getStore from "@/actions/get-store";
import Navbar from "@/components/navbar";
import axios from 'axios'

export async function generateMetadata({ params }: { params: { storeId: number } }) {
	const FETCHURL = `${process.env.NEXT_PUBLIC_API_URL}/store/search`;
	const { data: store } = await axios.get(`${FETCHURL}/${params.storeId}`)

	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
		? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
		: 'http://localhost:3000'

	return {
		metadataBase: new URL(baseUrl),
		title: {
			default: `${store.name}`,
			template: `%s - ${store.name}`
		},
		robots: {
			follow: true,
			index: true
		},
		description: 'Tienda de sellfinity'
	}
}

export default async function StoreLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { storeId: number };
}) {
	const store = await getStore(params.storeId);

	return (
		<>
			<Navbar store={store} />
			{children}
		</>
	);
}
