import { Storage } from "appwrite";
import { client } from "./config";

export const storage = new Storage(client);

export const BUCKET_ID =
  process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!;