import { Prisma } from "@prisma/client";

export const ALL_USER = Prisma.validator<Prisma.UserInclude>()({
  pikmin: {
    select: {
      imageUrl: true,
    },
  },
});

export type AllUser = Prisma.UserGetPayload<{
  include: typeof ALL_USER;
}>;
