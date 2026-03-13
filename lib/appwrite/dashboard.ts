import { Databases } from "appwrite";
import { client } from "./config";

const databases = new Databases(client);

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const JOBS_COLLECTION = process.env.NEXT_PUBLIC_APPWRITE_JOBS_COLLECTION_ID!;
const RESOURCES_COLLECTION = process.env.NEXT_PUBLIC_APPWRITE_RESOURCES_COLLECTION_ID!;
const SOLUTIONS_COLLECTION = process.env.NEXT_PUBLIC_APPWRITE_SOLUTIONS_COLLECTION_ID!;
const Application_COLLECTION = process.env.NEXT_PUBLIC_APPWRITE_JOB_Application_COLLECTION_ID!;


// JOB COUNT
export const getJobsCount = async () => {
    const res = await databases.listDocuments(DATABASE_ID, JOBS_COLLECTION);
    return res.total;
};


// RESOURCES COUNT
export const getResourcesCount = async () => {
    const res = await databases.listDocuments(DATABASE_ID, RESOURCES_COLLECTION);
    return res.total;
};


// SOLUTIONS COUNT
export const getSolutionsCount = async () => {
    const res = await databases.listDocuments(DATABASE_ID, SOLUTIONS_COLLECTION);
    return res.total;
};

// SOLUTIONS COUNT
export const getApplicationCount = async () => {
    const res = await databases.listDocuments(DATABASE_ID, Application_COLLECTION);
    return res.total;
};