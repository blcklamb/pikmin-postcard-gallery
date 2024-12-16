/*
  Warnings:

  - You are about to drop the `Pikmin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostCard" DROP CONSTRAINT "PostCard_send_from_user_id_fkey";

-- DropForeignKey
ALTER TABLE "PostCard" DROP CONSTRAINT "PostCard_send_to_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_favorite_pikmin_id_fkey";

-- DropTable
DROP TABLE "Pikmin";

-- DropTable
DROP TABLE "PostCard";

-- CreateTable
CREATE TABLE "pikmin" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "pikmin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_card" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "send_at" TIMESTAMPTZ(6) NOT NULL,
    "image_url" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "send_to_user_id" TEXT NOT NULL,
    "send_from_user_id" TEXT NOT NULL,

    CONSTRAINT "post_card_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pikmin_id_key" ON "pikmin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "post_card_id_key" ON "post_card"("id");

-- AddForeignKey
ALTER TABLE "post_card" ADD CONSTRAINT "post_card_send_to_user_id_fkey" FOREIGN KEY ("send_to_user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_card" ADD CONSTRAINT "post_card_send_from_user_id_fkey" FOREIGN KEY ("send_from_user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_favorite_pikmin_id_fkey" FOREIGN KEY ("favorite_pikmin_id") REFERENCES "pikmin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
