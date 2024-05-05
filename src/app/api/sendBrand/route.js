import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const value = await req.json();

  try {
    await prisma.brand.create({
      data: {
        name: value.name,
        email: value.email,
        phoneNumber: value.phoneNumber.toString(),
        companyName: value.companyName,
        companySize: value.companySize,
        industry: value.industry,
        otherIndustry: value.otherIndustry,
        monthlyInfluencerBudget: value.monthlyInfluencerBudget,
        instaUsername: value.instaUsername,
        tiktokUsername: value.tiktokUsername,
      },
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
