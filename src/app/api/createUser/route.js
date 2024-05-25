import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { createCreators } from "@/app/sheets/google-sheet-action";

const prisma = new PrismaClient();

export async function POST(req) {
  const value = await req.json();

  try {
    await prisma.creator.create({
      data: {
        name: value.name,
        pronoun: value.pronoun,
        phoneNumber: value.phoneNumber.toString(),
        email: value.email,
        nationality: value.nationality,
        location: value.location,
        dateOfBirth: new Date(value.dateOfBirth),
        languages: value.languages,
        otherlanguagesString: value.otherlanguagesString,
        interests: value.interests,
        otherinterestsString: value.otherinterestsString,
        employmentType: value.employmentType,
        otherEmploymentType: value.otherEmploymentType,
        instaUsername: value.instaUsername,
        tiktokUsername: value.tiktokUsername,
      },
    });

    await createCreators({
      name: value.name,
      pronoun: value.pronoun,
      phoneNumber: value.phoneNumber.toString(),
      email: value.email,
      nationality: value.nationality,
      location: value.location,
      dateOfBirth: new Date(value.dateOfBirth),
      languages: value.languages.toString(),
      otherlanguagesString: value.otherlanguagesString,
      interests: value.interests.toString(),
      otherinterestsString: value.otherinterestsString,
      employmentType: value.employmentType,
      otherEmploymentType: value.otherEmploymentType,
      instaUsername: value.instaUsername,
      tiktokUsername: value.tiktokUsername,
    });

    return new NextResponse(
      JSON.stringify({
        message: `Submitted. Thanks, ${value.name}!`,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "Error" }), {
      status: 404,
    });
  }
}

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      message: "Hello",
    }),
    {
      status: 200,
    }
  );
}
