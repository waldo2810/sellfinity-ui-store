import { NextResponse } from "next/server";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/store`;

export const getStores = async () => {
  const userEmail = "waldo2810@gmail.com";

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
