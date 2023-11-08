import { Color } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (storeId: number): Promise<Color[]> => {
  try {
    const { data } = await axios.get(URL, { params: { storeId } });
    return data;
  } catch (error) {
    console.log(error)
    return []
  }
};

export default getColors;
