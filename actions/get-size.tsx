import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getsize = async (id: number): Promise<Size> => {
  const res = await fetch(`${URL}/search/${id}`);

  return res.json();
};

export default getsize;
