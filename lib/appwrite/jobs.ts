import { Databases, ID, Query } from "appwrite";
import { client } from "./config";

const databases = new Databases(client);
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_JOBS_COLLECTION_ID!;

export const createJob = async (jobData: {
    title: string;
    type: string;
    workMode?: string;
    focus?: string;
    experience?: string;
    published?: boolean;
}) => {
    try {
        const response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            {
                title: jobData.title,
                type: jobData.type,
                workMode: jobData.workMode || null,
                focus: jobData.focus || null,
                experience: jobData.experience || null,
                published: jobData.published ?? true,
            }
        );

        return response;
    } catch (error) {
        console.error("Error creating job:", error);
        throw error;
    }
};


export const getJobs = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [Query.orderDesc("$createdAt")]
        );

        return response.documents;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
};