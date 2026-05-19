import { Account, Client } from "appwrite";

const client = new Client();

// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
client
    .setEndpoint("https://sgp.cloud.appwrite.io/v1")
    .setProject("69afaa77002dd254292b");

export const account = new Account(client);

export { client };