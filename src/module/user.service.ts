import { ALL_USER } from "@/type/user.type";
import db from "./db";

class User {
  async getAllUsers() {
    return db.user.findMany({
      include: ALL_USER,
      orderBy: {
        name: "asc",
      },
    });
  }

  async getUserIdFromUserName(name: string) {
    return db.user.findFirst({
      where: {
        name,
      },
      select: {
        id: true,
      },
    });
  }

  async getMaximumSendFrom() {
    const maximumSendFrom = await db.postCard.groupBy({
      by: "sendFromUserId",
      _count: {
        sendFromUserId: true,
      },
      orderBy: {
        _count: {
          sendFromUserId: "desc",
        },
      },
    });

    return maximumSendFrom;
  }
}

export const user = new User();
