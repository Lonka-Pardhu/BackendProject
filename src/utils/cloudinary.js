import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    // if there is no localFilePath found then we return null
    if (!localFilePath) return null;

    //upload the file to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //on successful file upload to cloudinary we are deleting the files which are saved temporaryly in the server
    fs.unlinkSync(localFilePath);
    // console.log("file has been uploaded to cloudinary:", response.url);
    return response;
  } catch (error) {
    // we remove the locally saved temporary file when the upload to cloudinary fails
    fs.unlinkSync(localFilePath);
    console.log("UPLOAD FAILED ERR: ", error);
    return null;
  }
};

export { uploadOnCloudinary };
