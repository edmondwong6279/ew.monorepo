import { revalidateTag } from "next/cache";

export async function POST() {
  console.log("Hit cache endpoint, clearing cache");
  revalidateTag("all-content");

  return Response.json({ message: "cache cleared" });
}
