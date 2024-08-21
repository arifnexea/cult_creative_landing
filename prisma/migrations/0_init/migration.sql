-- CreateTable
CREATE TABLE "Brand" (
    "id" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companySize" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "otherIndustry" TEXT,
    "monthlyInfluencerBudget" INTEGER NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Creator" (
    "id" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "pronoun" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "languages" TEXT[],
    "otherlanguagesString" TEXT,
    "interests" TEXT[],
    "otherinterestsString" TEXT,
    "employmentType" TEXT NOT NULL,
    "otherEmploymentType" TEXT,
    "instaUsername" TEXT NOT NULL,
    "tiktokUsername" TEXT,

    CONSTRAINT "Creator_pkey" PRIMARY KEY ("id")
);

