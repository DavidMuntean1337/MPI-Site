/*
  Warnings:

  - You are about to drop the `BlogPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "BlockType" AS ENUM ('TITLE', 'PARAGRAPH', 'DESCRIPTION', 'AUTHOR', 'IMAGE', 'LIST');

-- DropTable
DROP TABLE "BlogPost";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "chapter" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostBlock" (
    "id" TEXT NOT NULL,
    "type" "BlockType" NOT NULL,
    "value" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "PostBlock_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostBlock" ADD CONSTRAINT "PostBlock_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
