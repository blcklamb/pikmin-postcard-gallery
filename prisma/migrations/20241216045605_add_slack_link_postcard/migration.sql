-- AlterTable
ALTER TABLE "post_card" ADD COLUMN     "slack_link" TEXT,
ALTER COLUMN "image_url" DROP NOT NULL;
