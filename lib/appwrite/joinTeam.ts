import { Databases, ID, Query } from "appwrite";
import { client } from "./config";

const databases = new Databases(client);

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID =
    process.env.NEXT_PUBLIC_APPWRITE_JOB_Application_COLLECTION_ID!;


export const joinTeam = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    location?: string;
    linkedin?: string;
    portfolio?: string;
    jobTitle: string;
    experience?: string;
    resumeId?: string;
    privacyAccepted: boolean;
}) => {
    try {
        const response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                location: data.location || "",
                linkedin: data.linkedin || "",
                portfolio: data.portfolio || "",
                jobTitle: data.jobTitle,
                experience: data.experience || "",
                resumeId: data.resumeId || "",
                privacyAccepted: data.privacyAccepted,
            }
        );

        return response;
    } catch (error) {
        console.error("Join Team Error:", error);
        throw error;
    }
};

export const getApplications = async () => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        Query.orderDesc("$createdAt")
      ]
    );

    return response.documents;
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};