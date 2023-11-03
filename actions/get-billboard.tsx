import { Billboard } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: number): Promise<Billboard> => {
  const { data } = await axios.get(`${URL}/${id}`);
  return data;
};

export default getBillboard;
