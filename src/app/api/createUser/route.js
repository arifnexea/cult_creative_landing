import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const value = await req.json();

  const language =
    value.language === "others" ? value.others.language : value.language;

  try {
    const a = await prisma.creator.create({
      data: {
        name: value.name,
        email: value.email,
        pronoun: value.pronoun,
        phoneNumber: value.phoneNumber.toString(),
        employmentType: value.employmentType,
        nationality: value.nationality,
        birthDate: new Date(value.birthDate),
        location: value.location,
        instaUsername: value.instaUsername,
        tiktokUsername: value.tiktokUsername,
        language: language,
        interests: value.interests,
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: `Succesfully submitted, Thanks ${value.name} !`,
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

// export async function GET() {
//   return new NextResponse(
//     JSON.stringify({
//       message: `Hello`,
//     }),
//     {
//       status: 200,
//     }
//   );
// }
