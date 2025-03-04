"use server";

import { cookies } from "next/headers";

export const createShop = async (data: FormData) => {
  const token = (await cookies()).get("accessToken")!.value;
  console.log(token);
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/shop`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};