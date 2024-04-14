-- CreateTable
CREATE TABLE "Creator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pronoun" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "instaUsername" TEXT NOT NULL,
    "tiktokUsername" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "interests" TEXT[],

    CONSTRAINT "Creator_pkey" PRIMARY KEY ("id")
);
