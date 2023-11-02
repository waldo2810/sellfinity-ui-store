import { Size } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getsize = async (id: number): Promise<Size> => {
  const { data } = await axios.get(`${URL}/search/${id}`);
  return data;
};

export default getsize;
