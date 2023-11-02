import { Category } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (storeId: number): Promise<Category[]> => {
  const { data } = await axios.get(URL, { params: { storeId } });
  return data;
};

export default getCategories;
