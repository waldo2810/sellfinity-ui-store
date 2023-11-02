import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
	try {
		const { data } = await axios.get(URL);
		return data;
	} catch (error) {
		console.log(error)
		return []
	}
};

export default getColors;
