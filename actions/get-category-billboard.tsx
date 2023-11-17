import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getCategoryBillboard = async (categoryId: string) => {
  const id = Number(categoryId);
  try {
    const { data } = await axios.get(URL, { params: { categoryId: id } });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCategoryBillboard;
