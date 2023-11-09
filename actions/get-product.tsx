import { ProductResponse } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<ProductResponse> => {
  const { data } = await axios.get(`${URL}/search/${id}`);
  return data;
};

export default getProduct;
