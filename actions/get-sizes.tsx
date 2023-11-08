import { Size } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (storeId: number): Promise<Size[]> => {
  try {
    const { data } = await axios.get(URL, { params: { storeId } });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getSizes;
