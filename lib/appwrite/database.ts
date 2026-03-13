import { Databases } from "appwrite";
import { client } from "./config";

export const databases = new Databases(client);

export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
export const RESOURCES_COLLECTION_ID =
  process.env.NEXT_PUBLIC_APPWRITE_RESOURCES_COLLECTION_ID!;