import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js"; 

const galleryStorage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let folderName = "gallery-management";
    const resourceType = file.mimetype.startsWith("video/") ? "video" : "image";

    return {
      folder: folderName,
      resource_type: resourceType,
      allowed_formats: ["jpg", "jpeg", "png", "mp4", "webp", "avi", "mov"],
    };
  },
});

export const uploadGalleryFiles = multer({ storage: galleryStorage }).array("media", 10);
