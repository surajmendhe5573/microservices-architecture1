import multer from "multer";
import imagekit from "./imagekit.js";

const storage = multer.memoryStorage();
export const upload = multer({ storage });

/* ImageKit Upload */
export const uploadAdminPhoto = async (file) => {
  if (!file) return null;

  const response = await imagekit.upload({
    file: file.buffer.toString("base64"),
    fileName: `admin_${Date.now()}.jpg`,
    folder: "/admins/profile",
  });

  return {
    url: response.url,
    fileId: response.fileId,
  };
};
