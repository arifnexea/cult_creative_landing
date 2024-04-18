/*
  Warnings:

  - Added the required column `employmentType` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Creator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Creator" ADD COLUMN     "employmentType" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;
