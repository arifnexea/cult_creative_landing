/*
  Warnings:

  - Added the required column `instaUsername` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otherIndustry` to the `Brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiktokUsername` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" ADD COLUMN     "instaUsername" TEXT NOT NULL,
ADD COLUMN     "otherIndustry" TEXT NOT NULL,
ADD COLUMN     "tiktokUsername" TEXT NOT NULL,
ALTER COLUMN "companySize" SET DATA TYPE TEXT;
