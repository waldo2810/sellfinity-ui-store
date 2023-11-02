import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColor = async (id: number): Promise<Color> => {
	const { data } = await axios.get(`${URL}/search/${id}`);
	return data;
};

export default getColor;
