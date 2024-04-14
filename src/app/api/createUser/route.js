import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const value = await req.json();

  try {
    const a = await prisma.creator.create({
      data: {
        name: value.name,
        email: value.email,
        pronoun: value.pronoun,
        nationality: value.nationality,
        birthDate: new Date(value.birthDate),
        location: value.location,
        instaUsername: value.instaUsername,
        tiktokUsername: value.tiktokUsername,
        language: value.language,
        interests: value.interests,
      },
    });

    return new NextResponse(JSON.stringify({ message: "YEAYY" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "Error" }), {
      status: 404,
    });
  }
}
