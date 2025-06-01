import { Client, Account, Databases, Storage, Avatars } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT!) 
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID!) 
  .setLocale("es");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
