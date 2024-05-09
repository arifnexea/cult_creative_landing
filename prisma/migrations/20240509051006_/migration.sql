/*
  Warnings:

  - You are about to drop the column `industry` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `instaUsername` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `otherIndustry` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `tiktokUsername` on the `Brand` table. All the data in the column will be lost.
  - You are about to drop the column `employmentType` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the column `otherEmploymentType` on the `Creator` table. All the data in the column will be lost.
  - Added the required column `employmentStatus` to the `Creator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "industry",
DROP COLUMN "instaUsername",
DROP COLUMN "otherIndustry",
DROP COLUMN "tiktokUsername",
ADD COLUMN     "industries" TEXT[],
ADD COLUMN     "otherindustriesString" TEXT;

-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "employmentType",
DROP COLUMN "otherEmploymentType",
ADD COLUMN     "employmentStatus" TEXT NOT NULL,
ADD COLUMN     "otherEmploymentStatus" TEXT,
ALTER COLUMN "tiktokUsername" DROP NOT NULL,
ALTER COLUMN "otherinterestsString" DROP NOT NULL,
ALTER COLUMN "otherlanguagesString" DROP NOT NULL;
