import { Databases, ID } from "appwrite";
import { client } from "./config";

const databases = new Databases(client);

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_RESOURCES_COLLECTION_ID;

export const getResources = async () => {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID
        );

        return response.documents;
    } catch (error) {
        console.error("Error fetching resources:", error);
        return [];
    }
};

export const createResource = async (data: any) => {
    try {
        const response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            data
        );

        return response;
    } catch (error) {
        console.error("Error creating resource:", error);
        throw error;
    }
};

export const updateResource = async (resourceId: string, data: any) => {
    try {
        const response = await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            resourceId,
            data
        );

        return response;
    } catch (error) {
        console.error("Error updating resource:", error);
        throw error;
    }
};


// DELETE RESOURCE
export const deleteResource = async (resourceId: string) => {
    try {
        await databases.deleteDocument(
            DATABASE_ID,
            COLLECTION_ID,
            resourceId
        );

        return true;
    } catch (error) {
        console.error("Error deleting resource:", error);
        throw error;
    }
};