/*
  Warnings:

  - You are about to drop the column `language` on the `Creator` table. All the data in the column will be lost.
  - Added the required column `otherEmploymentType` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherinterestsString` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherlanguagesString` to the `Creator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "language",
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "otherEmploymentType" TEXT NOT NULL,
ADD COLUMN     "otherinterestsString" TEXT NOT NULL,
ADD COLUMN     "otherlanguagesString" TEXT NOT NULL;
