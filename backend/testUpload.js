import cloudinary from "./src/lib/cloudinary.js";
import { ENV } from "./src/lib/env.js";

// Debug: confirm credentials are actually loaded before attempting upload
console.log("cloud_name:", ENV.CLOUDINARY_CLOUD_NAME);
console.log("api_key:", ENV.CLOUDINARY_API_KEY);
console.log("api_secret length:", ENV.CLOUDINARY_API_SECRET?.length);

try {
  const result = await cloudinary.uploader.upload(
    "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    {
      folder: "chatapp-test",
    }
  );

  console.log("✅ Upload successful!");
  console.log(result.secure_url);
} catch (error) {
  console.log("❌ Upload failed");
  console.dir(error, { depth: null });
}