"use server";

import db from "@/lib/db/drizzle";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";

//test
export const getCourses = async () => {
  noStore();
  const data = await db.query.course.findMany();
  console.log(data);
  return data;
};
