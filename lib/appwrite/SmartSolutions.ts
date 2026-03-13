import { Databases, ID, Query } from "appwrite";
import { client } from "./config";

const databases = new Databases(client);

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_SOLUTIONS_COLLECTION_ID;

export const createSolution = async (data: any) => {
    try {
        const response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            data
        );

        return response;
    } catch (error) {
        console.error("Error creating solution:", error);
        throw error;
    }
};

export const getSolutions = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.orderAsc("order") // sort by order column
            ]
        );

        return response.documents;
    } catch (error) {
        console.error("Error fetching solutions:", error);
        return [];
    }
};