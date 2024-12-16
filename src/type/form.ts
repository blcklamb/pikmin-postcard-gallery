"use client";

import { z } from "zod";

export interface Form {
  sendTo: UserSelect;
  sendFrom: UserSelect;
  postCardImageUrl: string;
  sendAt: Date;
}

const userSelectSchema = z.object({
  value: z.string(),
  label: z.string(),
  pikminImageUrl: z.string().optional(),
});

export const formSchema = z.object({
  sendTo: userSelectSchema,
  sendFrom: userSelectSchema,
  postCardImageUrl: z.string(),
  sendAt: z.date(),
});

export type UserSelect = z.infer<typeof userSelectSchema>;

export type FormSchemaType = z.infer<typeof formSchema>;
