/*
  Warnings:

  - You are about to drop the column `employmentStatus` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the column `otherEmploymentStatus` on the `Creator` table. All the data in the column will be lost.
  - Added the required column `employmentType` to the `Creator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "employmentStatus",
DROP COLUMN "otherEmploymentStatus",
ADD COLUMN     "employmentType" TEXT NOT NULL,
ADD COLUMN     "otherEmploymentType" TEXT;
