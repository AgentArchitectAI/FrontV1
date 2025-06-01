import { account } from "./appwrite";
import type { OAuthProvider } from "appwrite";

const success = import.meta.env.VITE_APPWRITE_SUCCESS_URL!;
const failure = import.meta.env.VITE_APPWRITE_FAILURE_URL!;

export const loginWithGoogle = () => {
  account.createOAuth2Session("google" as OAuthProvider, success, failure);
};

export const loginWithGitHub = () => {
  account.createOAuth2Session("github" as OAuthProvider, success, failure);
};

export const logout = () => {
  return account.deleteSession("current");
};
