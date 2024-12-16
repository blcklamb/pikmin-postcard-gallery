"use server";

import { FormSchemaType } from "@/type/form";
import { postCard } from "./postcard.service";

export async function submitPostCard(data: FormSchemaType) {
  console.log(data);
  await postCard.createPostCard(data);
}
