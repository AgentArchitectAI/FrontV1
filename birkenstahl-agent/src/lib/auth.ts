import { account } from "./appwrite";
import type { OAuthProvider } from "appwrite";

export const loginWithGoogle = () => {
  account.createOAuth2Session("google" as OAuthProvider, "/dashboard", "/login");
};

export const loginWithGitHub = () => {
  account.createOAuth2Session("github" as OAuthProvider, "/dashboard", "/login");
};

export const logout = () => {
  return account.deleteSession("current");
};
