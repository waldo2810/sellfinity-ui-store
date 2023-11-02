import { NextResponse } from "next/server";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/store/search`;

const getStore = async (id: number) => {
	try {
		const { data } = await axios.get(`${URL}/${id}`);
		return data;
	} catch (error: unknown) {
		console.log(error);
		return new NextResponse("Error getting stores");
	}
};

export default getStore
