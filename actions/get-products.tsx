import { ProductResponse } from "@/types";
import qs from "query-string";
import axios, { AxiosError } from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
	storeId?: number;
	categoryId?: string;
	colorId?: string;
	sizeId?: string;
	isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<ProductResponse[]> => {
	const url = qs.stringifyUrl({
		url: URL,
		query: {
			storeId: query.storeId,
			colorId: query.colorId,
			sizeId: query.sizeId,
			categoryId: query.categoryId,
			isFeatured: query.isFeatured,
		},
	});

	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		if (error instanceof AxiosError) {
			console.log(error.response?.data)
		}
		return []
	}
};

export default getProducts;
