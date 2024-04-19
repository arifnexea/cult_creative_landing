// "use server";

// import { Storage } from "@google-cloud/storage";

// const storage = new Storage({
//   projectId: process.env.GCP_PROJECT_ID,
//   keyFilename: process.env.GCP_KEYFILE_PATH,
// });

// const bucket = storage.bucket("landing_page_cult");

// const useHomeData = () => {
//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const [file] = await storage
//           .bucket("landing_page_cult")
//           .file("landing_page_cult/main/Copy of Cult Creative 1.jpg")
//           .download();
//         const url = URL.createObjectURL(new Blob([file]));
//         return url;
//         // setImageUrl(url);
//       } catch (error) {
//         console.error("Error fetching image:", error);
//       }
//     };

//     fetchImage();
//   }, []);
// };

// export default useHomeData;
