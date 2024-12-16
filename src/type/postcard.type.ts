import { Prisma } from "@prisma/client";

export const ALL_POSTCARD = Prisma.validator<Prisma.PostCardInclude>()({
  sendFrom: {
    select: { name: true, nickname: true },
  },
  sendTo: {
    select: { name: true, nickname: true },
  },
});

export type AllPostcard = Prisma.PostCardGetPayload<{
  include: typeof ALL_POSTCARD;
}>;
