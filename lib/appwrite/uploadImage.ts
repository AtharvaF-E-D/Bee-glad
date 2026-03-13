import { storage, BUCKET_ID } from "./storage";
import { ID } from "appwrite";

export const uploadImage = async (file: File) => {
  const response = await storage.createFile(
    BUCKET_ID,
    ID.unique(),
    file
  );

  return response.$id;
};

export const uploadResume = async (file: File) => {
  try {
    const response = await storage.createFile(
      BUCKET_ID,
      ID.unique(),
      file
    );

    return response.$id;
  } catch (error) {
    console.error("Resume upload failed", error);
    throw error;
  }
};