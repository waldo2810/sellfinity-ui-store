import { NextResponse } from "next/server";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/store`;

export const getStores = async () => {
  const userEmail = process.env.NEXT_PUBLIC_STORE_OWNER;

  try {
    const { data } = await axios.get(URL, {
      headers: {
        "Content-Type": "application/json",
        "X-AUTH-EMAIL": userEmail,
      },
    });
    return data;
  } catch (error: unknown) {
    console.log(error);
    return new NextResponse("Error getting stores");
  }
};
