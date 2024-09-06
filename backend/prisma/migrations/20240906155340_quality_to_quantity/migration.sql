/*
  Warnings:

  - You are about to drop the column `quality` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "quality",
ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 0;
