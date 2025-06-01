import { account } from "./appwrite";
import type { OAuthProvider } from "appwrite";

export const loginWithGoogle = () => {
  account.createOAuth2Session(
    "google" as OAuthProvider, 
    "http://localhost:5173/dashboard",
    "http://localhost:5173/login"
  );
};

export const loginWithGitHub = () => {
  account.createOAuth2Session(
    "github" as OAuthProvider,
    "http://localhost:5173/dashboard",
    "http://localhost:5173/login"
  );
};

export const logout = () => {
  return account.deleteSession("current");
};
