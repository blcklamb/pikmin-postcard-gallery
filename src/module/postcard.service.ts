import { FormSchemaType } from "@/type/form";
import db from "./db";
import { user } from "./user.service";
import { ALL_POSTCARD } from "@/type/postcard.type";

class PostCard {
  async createPostCard(data: FormSchemaType) {
    const [sendToUser, sendFromUser] = await Promise.all([
      user.getUserIdFromUserName(data.sendTo.label),
      user.getUserIdFromUserName(data.sendFrom.label),
    ]);
    if (!sendToUser?.id || !sendFromUser?.id) {
      throw Error("id가 일치하는 user가 없습니다");
    }
    return db.postCard.create({
      data: {
        sendToUserId: sendToUser.id,
        sendFromUserId: sendFromUser.id,
        imageUrl: data.postCardImageUrl,
        sendAt: data.sendAt,
      },
    });
  }

  async getAllPostCard() {
    return await db.postCard.findMany({
      include: ALL_POSTCARD,
      orderBy: {
        sendAt: "desc",
      },
    });
  }
  async getFilteredPostcards(sendTo?: string, sendFrom?: string) {
    const sendToUser = sendTo && (await user.getUserIdFromUserName(sendTo));
    const sendFromUser =
      sendFrom && (await user.getUserIdFromUserName(sendFrom));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereClause: any = {};

    if (sendToUser) {
      whereClause.sendToUserId = sendToUser.id;
    }

    if (sendFromUser) {
      whereClause.sendFromUserId = sendFromUser.id;
    }

    return db.postCard.findMany({
      where: whereClause,
      include: ALL_POSTCARD,
      orderBy: {
        sendAt: "desc",
      },
    });
  }
}

export const postCard = new PostCard();
