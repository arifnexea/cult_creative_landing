// "use server";
// import { Storage } from "@google-cloud/storage";
// import { NextResponse } from "next/server";

// export async function GET(req, { params: { fileName } }) {
//   const storage = new Storage();
//   const bucket = storage.bucket("landing-cultcreative");
//   console.log(bucket);
//   // const file = bucket.file(`main/${fileName}`);
//   // console.log(file);
//   // const signedUrl = await file.getSignedUrl({
//   //   action: "read",
//   //   expires: "03-17-2025", // Adjust expiration date as needed
//   // });

//   return new NextResponse(JSON.stringify({ url: signedUrl }), {
//     status: 200,
//   });
//   //   res.status(200).json(response);
// }
