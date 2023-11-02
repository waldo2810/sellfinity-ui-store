import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<any> => {
	try {
		const { data } = await axios.get(`${URL}/search/${id}`);
		return data;
	} catch (error) {
		console.log(error)
	}
};

export default getCategory;
