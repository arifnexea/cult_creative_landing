import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { createBrands } from "@/app/sheets/google-sheet-action";

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
        otherindustriesString: value.otherindustriesString,
        industries: value.industries,
        monthlyInfluencerBudget: value.monthlyInfluencerBudget,
      },
    });

    await createBrands({
      name: value.name,
      email: value.email,
      phoneNumber: value.phoneNumber.toString(),
      companyName: value.companyName,
      companySize: value.companySize,
      otherindustriesString: value.otherindustriesString,
      industries: value.industries,
      monthlyInfluencerBudget: value.monthlyInfluencerBudget,
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
    return new NextResponse(
      JSON.stringify({
        error: "Form failed to submit. Please contact our admin.",
      }),
      {
        status: 404,
      }
    );
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
