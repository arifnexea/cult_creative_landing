"use server";
import { Storage } from "@google-cloud/storage";
import { NextResponse } from "next/server";

export async function GET(req) {
  const storage = new Storage({
    projectId: process.env.GCP_PROJECT_ID,
    keyFilename: process.env.GCP_KEYFILE_PATH,
  });
  const bucket = storage.bucket("landing_page_cult").file("main/");
  const fileContents = await bucket.download();
  // const file = await bucket.file(`main`);

  console.log(fileContents[0]);
  // const signedUrl = await file.getSignedUrl({
  //   action: "read",
  //   expires: "03-17-2025", // Adjust expiration date as needed
  // });

  // return new NextResponse(
  //   JSON.stringify({ url: files.map((file) => file.name) }),
  //   {
  //     status: 200,
  //   }
  // );
  //   res.status(200).json(response);
}
